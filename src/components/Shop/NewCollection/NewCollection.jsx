import React from 'react'
import new_collections from '../../../Assets/Frontend_Assets/new_collections'
import { Col, Container, Row } from 'react-bootstrap'
import Item from '../../Item/Item'
import NewCollectionclas from './NewCollection.module.css'
import ComponentTitle from '../../ComponentTitle/ComponentTitle'
const NewCollection = () => {
    return (
        <div >
            <Container className={NewCollectionclas.main}>
                <ComponentTitle title={'NEW COLLECTIONS'} />
                <Row>
                    {
                        new_collections.map((item, index) => {
                            return (
                                <Col key={index} lg={3} md={3} sm={12}>
                                    <Item
                                        id={item.id}
                                        name={item.name}
                                        image={item.image}
                                        new_price={item.new_price}
                                        old_price={item.old_price}
                                    />
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </div>
    )
}

export default NewCollection
