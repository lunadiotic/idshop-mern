import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const numberFormat = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })
    .format(value)
    .replace(/(\.|,)00$/g, '')

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
      </Link>
      <Card.Body>
        <Link href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as='div'>
        <Rating
          stars={product.rating}
          reviews={`${product.numReviews} reviews`}
        ></Rating>
      </Card.Text>
      <Card.Text as='h4'>{numberFormat(product.price)}</Card.Text>
    </Card>
  )
}

export default Product
