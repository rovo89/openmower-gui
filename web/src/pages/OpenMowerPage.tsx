import {Card, Col, notification, Row, Typography} from "antd";
import {MowerActions} from "../components/MowerActions.tsx";
import {StatusComponent} from "../components/StatusComponent.tsx";
import {HighLevelStatusComponent} from "../components/HighLevelStatusComponent.tsx";
import {ImuComponent} from "../components/ImuComponent.tsx";
import {WheelTicksComponent} from "../components/WheelTicksComponent.tsx";
import {GpsComponent} from "../components/GpsComponent.tsx";

export const OpenMowerPage = () => {
    const [api, contextHolder] = notification.useNotification();


    return <Row gutter={[16, 16]}>
        {contextHolder}
        <Col span={24}>
            <Typography.Title level={2}>OpenMower</Typography.Title>
        </Col>
        <Col span={24}>
            <MowerActions api={api}/>
        </Col>
        <Col span={24}>
            <Card title={"High Level Status"}>
                {<HighLevelStatusComponent api={api}/>}
            </Card>
        </Col>
        <Col span={24}>
            {<StatusComponent api={api}/>}
        </Col>
        <Col span={24}>
            <Card title={"IMU"}>
                {<ImuComponent api={api}/>}
            </Card>
        </Col>
        <Col span={12}>
            <Card title={"GPS"}>
                {<GpsComponent api={api}/>}
            </Card>
        </Col>
        <Col span={12}>
            <Card title={"Wheel Ticks"}>
                {<WheelTicksComponent api={api}/>}
            </Card>
        </Col>
    </Row>
}

export default OpenMowerPage;