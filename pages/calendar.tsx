import React, { useState } from 'react';
import type { NextPage } from 'next'
import { Heading } from 'govuk-react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment';
import eventData from '../data/calendar'

const DnDCalendar = withDragAndDrop(Calendar)
const mLocalizer = momentLocalizer(moment)

const CalendarPage: NextPage = (props: any) => {
  const [events, setEvents] = useState<any>(eventData);

  const moveEvent = ({ event, start, end }: any) => {
    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setEvents(nextEvents);

    props.addLogs([{
      dateTime: new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'}),
      type: 'Event moved',
      description: `Event '${event.title}' moved to start ${new Date(event.start).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'})} and end ${new Date(event.end).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'})}`,
    }]);
  }

  const resizeEvent = ({ event, start, end }: any) => {
    const nextEvents = events.map((existingEvent: any) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    setEvents(nextEvents);

    props.addLogs([{
      dateTime: new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'}),
      type: 'Event updated',
      description: `Event '${event.title}' updated to start ${new Date(event.start).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'})} and end ${new Date(event.end).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'})}`,
    }]);
  };

  return (
    <>
      <Heading>
        Calendar
      </Heading>

      <DnDCalendar className='calendar'
        localizer={mLocalizer}
        events={events}
        draggableAccessor={(event) => true}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        resizable
      />
    </>
  )
}

export default CalendarPage
