import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getConfig from '../../config/config.js';

// Get the configured list display mode
let listView = getConfig('listView', {
  mode: 'picture',
  name: 'name',
  image: 'thumbnail'
});

class Corpora extends Component {
  
  constructor() {
	  super();
	  this.state = {
		selectMode: false,
		selectedItems: {}
	  };
  }

  render() {
    let items = this._getItems();
    let count = this.props.items.length;
    let total = this.props.from;
	
	let subjectH2;
	if (this.state.selectMode) {
	  subjectH2 = (
	    <h2 className="h4 font-weight-bold text-center">
		  <span>Mode sélection</span>
		  <div><button className="btn btn-light ml-4 mr-2" onClick={_ => console.log("click")}>Attribuer un topic</button></div>
		  <div><button className="btn btn-danger" onClick={_ => this.setState({selectMode: false})}>Annuler</button></div>
		</h2>
	  );
	} else {
	  subjectH2 = (
	    <h2 className="h4 font-weight-bold text-center">
          <span>{this.props.ids.join(' + ')}</span>
          <span className="badge badge-pill badge-light ml-4 mr-2">{count} / {total}</span>
		  <div><button className="btn btn-light" onClick={_ => this.setState({selectMode: true})}>Sélectionner</button></div>
        </h2>
	  );
	}
	
    return(
      <div className="col-md-8 p-4">
        <div className="Subject">
		  {subjectH2}
          <div className="Items m-3">
            {items}
          </div>
        </div>
      </div>
    );
  }

  _getItems() {
    return this.props.items.map(item =>
        <Item corpora={this} key={item.id} item={item}
          id={item.corpus+'/'+item.id} />
    );
  }
  
  _toggleItemState(item) {
	let temp = this.state.selectedItems;
	temp[item.id] = !temp[item.id];
	this.setState({ selectedItems: temp });
  }

}

function Item(props) {
  switch (listView.mode) {
  case 'article':
    return Article(props);
  case 'picture':
    return Picture(props);
  default:
    return Picture(props);
  }
}

function getString(obj) {
  if (Array.isArray(obj)) {
    return obj.map(val => getString(val)).join(', ');
  }
  return String(obj);
}

function Article(props) {
  let propList = (listView.props || []).map(key => {
    return <li>{key} : <strong>{getString(props.item[key])}</strong></li>;
  });

  let uri = `/item/${props.item.corpus}/${props.item.id}`;
  let name = getString(props.item[listView.name]);
  return (
    <div className="Article">
      <div className="ArticleTitle"><Link to={uri}>{name}</Link></div>
      <ul>{propList}</ul>
    </div>
  );
}

function Picture(props) {
  let uri = `/item/${props.item.corpus}/${props.item.id}`;
  let img = getString(props.item[listView.image]);
  let name = getString(props.item[listView.name]);
  let selected = props.corpora.state.selectedItems[props.item.id];
  if (props.corpora.state.selectMode) {
	return (
	  <div className={selected ? "Item selected" : "Item"} onClick={_ => props.corpora._toggleItemState(props.item)}>
	    <span className="oi oi-check"></span>
        <img src={img} alt={name}/>
        <div className="text-center">{name}</div>
      </div>
	);
  } else {
    return (
      <div className="Item">
        <Link to={uri}>
          <img src={img} alt={name}/>
        </Link>
        <div className="text-center">{name}</div>
      </div>
    );
  }
}

export default Corpora;
