import { useEffect, useState } from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import PageLayout from '../components/layouts/page';
import type { DecisionTask } from '../types/decisionTask';
import { LoadingBox } from 'govuk-react';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [taskData, setTaskData] = useState<DecisionTask[]>([]);

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
    console.log('started', taskData);

  };

  return (
    <PageLayout>
      <LoadingBox loading={loading}>
        {!loading &&
          <Component {...pageProps} allocateTasks={allocateTasks} startTask={startTask} taskData={taskData} />
        }
      </LoadingBox>
    </PageLayout>
  )
}

export default MyApp
