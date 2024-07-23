import React from 'react';

import TimeboxList from './Timebox/TimeboxList';
import EditableTimebox from './Timebox/EditableTimebox';
import Error from './Timebox/Error';

function App() {
    return (
        <div className="App">
            <Error message="Coś nie działa w całej aplikacjić">
                <TimeboxList />
                <Error message="Coś nie działa w EditableTimebox">
                    <EditableTimebox />
                </Error>
            </Error>
        </div>
    )
}

export default App;
