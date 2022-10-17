import { useEffect, useState } from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import PageLayout from '../components/layouts/page';
import { LoadingBox } from 'govuk-react';
import type { DecisionTask } from '../types/decisionTask';
import type { Log } from '../types/log';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [taskData, setTaskData] = useState<DecisionTask[]>([]);
  const [logs, setLogs] = useState<Log[]>([]);
  const [search, setSearch] = useState<string>();
  const [searchFilters, setSearchFilters] = useState<string[]>([]);

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
        decisionTask.allocatedTo = allocateTo;
      }
      return decisionTask;
    }));
  };

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
            addLogs={addLogs}
            allocateTasks={allocateTasks}
            logs={logs}
            search={search}
            searchFilters={searchFilters}
            setSearch={setSearch}
            setSearchFilters={setSearchFilters}
            startTask={startTask}
            taskData={taskData} />
        }
      </LoadingBox>
    </PageLayout>
  )
}

export default MyApp
