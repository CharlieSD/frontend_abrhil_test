import React from "react";
import {connect} from 'react-redux'
import {getContactos,deleteContacto} from '../redux/actions.js'
import {Card, Row, Col, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


class ListContactos extends React.Component{

    componentDidMount() {
        this.props.getContactos();
    }

    deleteContacto = (id) => {
        this.props.deleteContacto(id, this.info);
    }

    info() {
        message.info('Contacto Eliminado');
    };

    render() {
        const c = this.props.contactos
        console.log(c)

        return (
            <Col span={12} offset={6}>
                {c.map(p => (
                    <Row gutter={[48, 48]}>
                        <Col span={24}>
                            <Card
                                key={p.id}
                                title={p.title}
                                style={{width: '100%'}}
                                actions={[
                                    <DeleteOutlined key="delete" onClick={()=>this.deleteContacto(p.id)} />,
                                ]}
                            >
                                <p>{p.content}</p>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </Col>
        );
    }
}

const mapStateToProps = (state) => ({
    contactos: state.contactos
})

const mapDispatchToProps = {
    getContactos, deleteContacto
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContactos)
