import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { WeekDay } from './calculator.js';

$(function(){
    $('#formOne').submit(function(e){
        e.preventDefault();
        let date = new WeekDay($('#date').val());
        console.log(date.dayOfWeek());
    });
});