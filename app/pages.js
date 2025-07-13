'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scheduleData, setScheduleData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setScheduleData(data));
  }, []);

  return (
    <main>
      <h1>にゃんこ大戦争スケジュール</h1>
      {scheduleData ? (
        Object.entries(scheduleData).map(([category, events]) => (
          <div key={category}>
            <h2>{category}</h2>
            <ul>
              {events.map((event, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: event }} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>読み込み中...</p>
      )}
    </main>
  );
}
