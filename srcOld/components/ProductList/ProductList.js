
import React, { PropTypes, Component } from 'react';
import { Breadcrumb, Table, Button, Col } from 'react-bootstrap';
import cx from 'classnames';
import _ from 'lodash';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProductList.css';
import Link from '../Link';

class ProductList extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    rs: PropTypes.array,
    popAddApp: PropTypes.func,
  };

  static defaultProps = {
    isFetching: true,
    rs: [],
    popAddApp: () => {},
  };

  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }
  renderRow(rowData, index) {
    const appName = _.get(rowData, 'name');
    return (
      <tr key={_.get(rowData, 'name')}>
        <td>
          <Link to={`/apps/${appName}`}>{appName}</Link>
        </td>
        <td style={{ textAlign: 'left' }}>
          <ul>
            {
            _.map(_.get(rowData, 'collaborators'), (item, email) => (
              <li key={email}>
                {email}
                <span className={s.permission}>
                    (<em>{_.get(item, 'permission')}</em>)
                  </span>
                {
                    _.get(item, 'isCurrentAccount') ?
                      <span className={cx(s.label, s.labelSuccess)}>
                      it's you
                    </span>
                    : null
                  }
              </li>
              ))
          }
          </ul>
        </td>
        <td>
          <ul>
            {
            _.map(_.get(rowData, 'deployments'), (item, email) => (
              <li key={email} style={item === 'Production' ? { color: 'green' } : null} >
                <Link to={`/apps/${appName}/${item}`}>{item}</Link>
              </li>
              ))
          }
          </ul>
        </td>
        <td />
      </tr>
    );
  }

  render() {
    const self = this;
    const tipText = 'No data';
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Breadcrumb>
            <Breadcrumb.Item active>
            Apps
          </Breadcrumb.Item>
          </Breadcrumb>
          <Col style={{ marginBottom: '20px' }}>
            <Button
              onClick={this.props.popAddApp}
              bsStyle="primary"
            >
          Add an app
          </Button>
          </Col>
          <Table striped bordered condensed hover responsive>
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }} >Name</th>
                <th style={{ textAlign: 'center' }} >Member</th>
                <th style={{ textAlign: 'center' }} >Deployments</th>
                <th style={{ textAlign: 'center' }} >Actions</th>
              </tr>
            </thead>
            <tbody>
              {
             this.props.rs.length > 0 ?
             _.map(this.props.rs, (item, index) => self.renderRow(item, index))
             :
             <tr>
               <td colSpan="4" >{tipText}</td>
             </tr>
            }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default withStyles(s)(ProductList);
