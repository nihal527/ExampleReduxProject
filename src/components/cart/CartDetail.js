import React, { Component } from "react";
import { connect } from "react-redux";
import * as cartAction from "../../redux/actions/cartAction";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";

import { bindActionCreators } from "redux";

class CartDetail extends Component {
  removeFromCart = (product) => {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " sepetten silindi");
  };
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Product Name</th>
              <th>Quantity </th>
              {/* <th>Unit Price</th>
              <th>Units InStock</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                {/* <th scope="row">{product.id}</th> */}
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.quantity}</td>

                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    x
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartAction.removeFromCart, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
