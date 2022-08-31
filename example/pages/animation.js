/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Heading, Div, HStack, Button, Spacer, Section, Line} from 'jsUI';
import NavBar from '../components/NavBar.js';

export default [
	NavBar,
	Section([
		Heading('Animation'),
		Line(),
		Div([
			Heading('Moves', 3),
			HStack([
				Button('Rotate')
					.onClick((element) => {
						element.rotate();
					}),
				Button('Shake')
					.onClick((element) => {
						element.shake();
					}),
				Button('Flip')
					.onClick((element) => {
						element.flip();
					}),
				Button('Bounce')
					.onClick((element) => {
						element.bounce();
					}),
				Button('Grow')
					.onClick((element) => {
						element.grow();
					}),
				Button('Shrink')
					.onClick((element) => {
						element.shrink();
						setTimeout(function () {
							element.grow();
						}, 1000);
					})
			])
				.gap('10px')

		]),
		Div([
			Heading('Fades', 3),
			HStack([
				Button('Fade In')
					.onClick((element) => {
						element.fadeIn();
					}),
				Button('Fade Out')
					.onClick((element) => {
						element.fadeOut();
						setTimeout(function () {
							element.fadeIn();
						}, 1000);
					})
			])
				.gap('10px'),
			Spacer(),
			HStack([
				Button('Fade In Up')
					.onClick((element) => {
						element.fadeInUp();
					}),
				Button('Fade In Left')
					.onClick((element) => {
						element.fadeInLeft();
					}),
				Button('Fade In Right')
					.onClick((element) => {
						element.fadeInRight();
					})
			])
				.gap('10px'),
			Spacer(),
			HStack([
				Button('Fade Out Down')
					.onClick((element) => {
						element.fadeOutDown();
						setTimeout(function () {
							element.fadeInUp();
						}, 1000);
					}),
				Button('Fade Out Left')
					.onClick((element) => {
						element.fadeOutLeft();
						setTimeout(function () {
							element.fadeInLeft();
						}, 1000);
					}),
				Button('Fade Out Right')
					.onClick((element) => {
						element.fadeOutRight();
						setTimeout(function () {
							element.fadeInRight();
						}, 1000);
					})
			])
				.gap('10px')

		])
	])
		.paddings(['10px', '20px'])
];