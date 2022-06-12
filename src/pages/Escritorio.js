import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useHideMenu } from '../context/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';

const { Title, Text } = Typography;

export const Escritorio = () => {

  useHideMenu(false)
  const [usuario] = useState(getUsuarioStorage())
  const navigate = useNavigate()

  const salir = () => {
    localStorage.clear()
    navigate("/ingresar")
  }

  const siguienteTicket = () => {
    console.log('siguiente ticket')
  }

  if (!usuario.agente || !usuario.escritorio) {
    return <Navigate to="/ingresar" />
  }


  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type='success'>{usuario.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape='round' type='danger' onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Está atendiendo el ticket numero: </Text>
          <Text
            style={{ fontSize: 30 }}
            type="danger"
          >
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6}>
          <Button
            onClick={siguienteTicket}
            shape="round"
            type='primary'
          >
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  )
}
