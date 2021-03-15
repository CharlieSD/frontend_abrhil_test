import React from "react";
import {connect} from 'react-redux'
import {createContacto} from '../redux/actions'
import "antd/dist/antd.css";
import {Form, Input, message, Button} from 'antd';

class CreateNewContacto extends React.Component {

    onFinish(values) {
        console.log(values);
        this.props.createContacto(values,this.info())
    }

    info() {
        message.info('Contacto Creado');
    };

    render() {
        const contactos = this.props.contactos
        console.log(contactos)

        const layout = {
            labelCol: {span: 5},
            wrapperCol: {span: 12},
        };

        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} is not validate email!',
                number: '${label} is not a validate number!',
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };

        return (
            <Form
                {...layout}
                name="nest-messages"
                onFinish={this.onFinish.bind(this)}
                validateMessages={validateMessages}>

                <Form.Item name='first_name' label="Nombre" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item name='last_name' label="Apellido" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item name='phone' label="Telefono" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item name='email' label="Email" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item name='photo' label="URL Imagen" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item wrapperCol={{...layout.wrapperCol}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }

}

const mapStateToProps = (state) => ({
    posts: state.contactos
})

const mapDispatchToProps = {
    createContacto
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewContacto)