import React from 'react';

import TimeboxList from './Timebox/TimeboxList';
import EditableTimebox from './Timebox/EditableTimebox';
import ErrorBoundary from './Timebox/ErrorBoundary';

function App() {
    return (
        <div className="App">
            <ErrorBoundary message="Coś nie działa w całej aplikacjić">
                <TimeboxList />
                <EditableTimebox />
            </ErrorBoundary>
        </div>
    )
}

export default App;
