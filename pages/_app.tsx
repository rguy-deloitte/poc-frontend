import { useEffect, useState } from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import PageLayout from '../components/layouts/page';
import { LoadingBox } from 'govuk-react';
import type { DecisionTask } from '../types/decisionTask';
import type { Log } from '../types/log';
import type { SavedSearch } from '../types/savedSearch'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [taskData, setTaskData] = useState<DecisionTask[]>([]);
  const [logs, setLogs] = useState<Log[]>([]);
  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchFilters, setSearchFilters] = useState<string[]>([]);
  const [workflowSortField, setWorkflowSortField] = useState<string>('dateOut');
  const [workflowSortDirection, setWorkflowSortDirection] = useState<string>('dsc');
  const [worflowFilterType, setWorflowFilterType] = useState<string[]>([]);


  useEffect(() => {
    fetch('/api/decision-tasks')
      .then((response: any) => response.json())
      .then((data: DecisionTask[]) => {
        setTaskData(data);
        setLoading(false);
      });
  }, []);

  const allocateTasks = (applicationIds: number[], allocateTo: string) => {
    setTaskData(taskData.map((decisionTask: DecisionTask) => {
      if (applicationIds.includes(decisionTask.applicationId)) {
        decisionTask.allocatedTo = allocateTo === 'Unallocate' ? undefined : allocateTo;
      }
      return decisionTask;
    }));
  };

  const saveSearch = (search: SavedSearch) => {
    setSavedSearches([search, ...savedSearches]);
  }

  const startTask = (applicationId: number) => {
    setTaskData(taskData.map((decisionTask: DecisionTask) => {
      if (applicationId === decisionTask.applicationId) {
        decisionTask.started = true;
      }
      return decisionTask;
    }));
  };

  const addLogs = (newLogs: Log[]) => {
    setLogs([...newLogs, ...logs]);
  };

  return (
    <PageLayout>
      <LoadingBox loading={loading}>
        {!loading &&
          <Component
            {...pageProps}
            //logs
            addLogs={addLogs}
            logs={logs}
            //search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            saveSearch={saveSearch}
            savedSearches={savedSearches}
            searchFilters={searchFilters}
            setSearchFilters={setSearchFilters}
            //tasks
            allocateTasks={allocateTasks}
            startTask={startTask}
            taskData={taskData}
            //workflow
            workflowSortField={workflowSortField}
            setWorkflowSortField={setWorkflowSortField}
            workflowSortDirection={workflowSortDirection}
            setWorkflowSortDirection={setWorkflowSortDirection}
            worflowFilterType={worflowFilterType}
            setWorflowFilterType={setWorflowFilterType}
          />
        }
      </LoadingBox>
    </PageLayout>
  )
}

export default MyApp
