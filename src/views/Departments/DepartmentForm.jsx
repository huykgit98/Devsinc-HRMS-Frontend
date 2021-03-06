import React from 'react';
import { Field,reduxForm } from 'redux-form'

import { Grid } from "material-ui";
import {
    RegularCard,
    Button,
    CustomInputWrapper,
    ItemGrid,
    Danger
} from "components";
import { connect } from "react-redux";


let DepartmentForm = props => {
    const { error, handleSubmit, submitting, isNew } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Grid container>
                <ItemGrid xs={12} sm={12} md={8}>
                    <RegularCard
                        cardTitle={ isNew? "New Department" : "Edit Department" }
                        content={
                            <div>
                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={12}>
                                        <Field name="name" type="text" component={CustomInputWrapper} custominputprops={{labelText: "Department Name"}} />
                                    </ItemGrid>
                                </Grid>
                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={12}>
                                      <Field name="description" type="text" component={CustomInputWrapper} custominputprops={{labelText: "Description"}} />
                                    </ItemGrid>
                                </Grid>
                            </div>
                        }
                        footer={
                            <div>
                                {error
                                    ? <Danger>{error}</Danger>
                                    : null
                                }
                                <Button disabled={submitting} onClick={handleSubmit} style={{float: "right"}} color="primary">{isNew ? "Create" : "Save Changes"}</Button>
                            </div>
                        }
                    />
                </ItemGrid>
            </Grid>
        </form>
    )
};

DepartmentForm =  reduxForm({
    form: 'new_department'
})(DepartmentForm);

DepartmentForm = connect(
  state => ({
    initialValues: state.departments.department
  })
)(DepartmentForm)

export default DepartmentForm
