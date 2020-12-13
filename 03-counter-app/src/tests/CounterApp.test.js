import React from 'react';
//import {getByText, render} from '@testing-library/react'
import {shallow} from 'enzyme'
import CounterApp from '../CounterApp';



describe('Pruebas en counter app', () => {

    let wrapper= shallow(<CounterApp />);

    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    })

/*Runs a function before each of the tests in this file runs. 
If the function returns a promise or is a generator, Jest waits
for that promise to resolve before running the test.

Optionally, you can provide a timeout (in milliseconds) for specifying
how long to wait before aborting. Note: The default timeout is 5 seconds.

This is often useful if you want to reset some global state that will be
used by many tests.*/

    test('Debera de hacer match con un snapshot ', () => {

       

        expect(wrapper).toMatchSnapshot();
        
    });

    test('Debera de devolver 100', () => {

        const wrapper = shallow(<CounterApp value ={100}/>).find('h3').text();
        //console.log(wrapper);
 
         expect(wrapper).toBe('100');
         
     });


     test('Debera de Aumentar en 1', () => {

        wrapper.find('button').at(1).simulate('click');
        const wrapperText = wrapper.find('h2').text();
 
        expect(wrapperText).toBe('1');
         
     });

     test('Debera de Disminuir en 1', () => {

        wrapper.find('button').at(3).simulate('click');
        const wrapperText = wrapper.find('h2').text();
 
        expect(wrapperText).toBe('-1');
         
     });

     test('Debera de reiniciar el valor a 0', () => {

        const wrapper = shallow(<CounterApp value ={0}/>);
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(4).simulate('click');
        const wrapperText = wrapper.find('h2').text();
        
        expect(wrapperText).toBe('0');
         
     });
     
     
}) 
