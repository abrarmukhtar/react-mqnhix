import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './ContactForm';
import Contact from './Contacts';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  return (
    <div>
      <Contact />
    </div>
  );
}
