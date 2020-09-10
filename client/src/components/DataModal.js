import React, {Component} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Input,
    Container
} from 'reactstrap';
import {connect} from 'react-redux';
import { addData } from '../actions/dataActions'


class DataModal extends Component{
    state= {
        modal : false,
        link : ""
    };

    toggle = () =>{
        this.setState({
            modal : !this.state.modal
        });
    }
    onChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const newData ={
            link: this.state.link
        }
        console.log(newData)
        //calls addData
        this.props.addData(newData);
        //close modal
        this.toggle();
    }

    render(){
        return(
            <div>
                <Container>
                    <Button 
                        color="dark" 
                        style={{marginBottom : '2rem', marginLeft :'.75rem'}}
                        onClick= {this.toggle}
                    >
                    Add Video 
                    </Button>
                </Container>
                <Modal 
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle = {this.toggle}>
                        Add to Bookmarks
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit = {this.onSubmit }>
                            <FormGroup>
                                <Label for= 'data'>Link</Label>
                                <Input
                                    type = 'text'
                                    name='link'
                                    placeholder= 'Video Link'
                                    onChange={this.onChange}
                                >
                                </Input>
                            </FormGroup>
                            <Button color='dark' marginBottom='2 rem' block>
                                Add Video
                            </Button>
                        </form>
                    </ModalBody>    
                </Modal>
            </div>
        );
    }

}
const mapStateToProps = (state) => ({
    data : state.data
})

export default connect(mapStateToProps,{addData})(DataModal);