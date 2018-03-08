import React from 'react';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';import Button from 'material-ui/Button';
import * as types from "../../actions/actionTypes";
import { connect } from 'react-redux';
import {deleteResource} from "../../actions/resourceActions";

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class DeleteModal extends React.Component {

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onBackdropClick={this.props.handleClose}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Are you sure you want to Delete this user?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            You can not undo this action!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
                            No
                        </Button>
                        <Button onClick={this.props.deleteResource.bind(this,this.props.resourceType,this.props.resourceId)} color="primary" autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return({
        deleteResource: (resourceType,resourceId) => {dispatch(deleteResource(resourceType,resourceId)); dispatch({type: types.HIDE_MODAL}); },
        handleClose: () => { dispatch({type: types.HIDE_MODAL}) }
    })
}

function mapStateToProps(state) {
    return state.modals.modalProps;
}

export default connect(mapStateToProps,mapDispatchToProps)(DeleteModal);