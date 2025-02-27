import { useState, useEffect } from 'react';
import {Container, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Form from '@rjsf/mui';
import { customizeValidator } from '@rjsf/validator-ajv8';

import schema from '../specification-data/v4.0.0/device.schema.json';

// initialize validator based on draft-06 (generated from quick)
const metaSchemaDraft06 = require('ajv/lib/refs/json-schema-draft-06.json');

const validator = customizeValidator({
  additionalMetaSchemas: [metaSchemaDraft06],
});


function SpecForm(props) {
    const { spec, setSpec, uiSchema } = props;

    const handleFormChange = ({ formData }) => {
        setSpec(formData);
    }

        const handleFormSubmit = ({formData}, e) => {
        console.log('form submitted');
    }

    return (
        <Container maxWidth="md">
            <Form
                sx={{ p: 10 }}
                schema={schema}
                uiSchema={uiSchema}
                formData={spec}
                validator={validator}
                onChange={handleFormChange}
                onSubmit={handleFormSubmit}
              />
        </Container>
    );
}

export default SpecForm;
