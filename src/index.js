/* index.js */

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './index.css';

class Person {
	constructor( name, address, city, state, zipcode ) {
		Object.assign( this, { name, address, city, state, zipcode } );
	}
}

function AddressLabel( { className, name, address, city, state, zipcode } ) {
	return (
		<address className={ [ 'address-block', className ].join( ' ' ) }>
			{ name }<br/>
			{ address }<br/>
			{ city }, { state } { zipcode }
		</address>
	)
}

AddressLabel.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	state: PropTypes.string.isRequired,
	zipcode: PropTypes.string.isRequired,
}

function Stamp( { text } ) {
	return (
		<div className="stamp"><span>{ text }</span></div>
	)
}

Stamp.propTypes = {
	text: PropTypes.string.isRequired,
}

function Envelope( { fromPerson, toPerson } ) {
	return (
		<div className="envelope">
			<AddressLabel
				className="sender"
				name={ fromPerson.name }
				address={ fromPerson.address }
				city={ fromPerson.city }
				state={ fromPerson.state }
				zipcode={ fromPerson.zipcode }
			/>
			<AddressLabel
				className="receiver"
				name={ toPerson.name }
				address={ toPerson.address }
				city={ toPerson.city }
				state={ toPerson.state }
				zipcode={ toPerson.zipcode }
			/>
			<Stamp text="Stamp" />
		</div>
	)
}

Envelope.propTypes = {
	fromPerson: PropTypes.shape( AddressLabel.propTypes ),
	toPerson: PropTypes.shape( AddressLabel.propTypes ),
}

function Main() {
	const sender = new Person( 'Clark Kent', '123 Fake St.', 'Boston', 'MA', '02118' );
	const receiver = new Person( 'Bruce Wayne', '456 Foreign Dr.', 'Houston', 'TX', '15851' );
	return (
		<Envelope fromPerson={ sender } toPerson={ receiver } />
	)
}

ReactDOM.render( <Main />, document.querySelector( '#root' ) );
