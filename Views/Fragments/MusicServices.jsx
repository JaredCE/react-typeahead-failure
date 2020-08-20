import React, { Fragment, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

/* example-start */
const MusicServices = (services) => {
    const [singleSelections, setSingleSelections] = useState([]);
    const musicServices = services.options
    let options = [{id: 1, label:'london'}, {id:2, label:'cardiff'}, {id:3, label:'new york'}];
    return (
        <Fragment>
            <Form.Group>
                <Form.Label>Single Selection</Form.Label>
                <Typeahead
                    id="basic-typeahead-single"
                    onChange={setSingleSelections}
                    labelkey='label'
                    options={options}
                    placeholder="Choose a state..."
                    selected={singleSelections}
                />
            </Form.Group>
        </Fragment>
    );
};
/* example-end */

export default MusicServices;
