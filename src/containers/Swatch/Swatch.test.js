import React from 'react';
import { shallow } from 'enzyme';
import { Swatch, mapStateToProps, mapDispatchToProps } from './Swatch';
import { makePalette } from '../../actions';

describe('Swatch', () => {
	let wrapper;
	let mockPalette;
	let mockMakePalette;

	beforeEach(() => {
		mockMakePalette = jest.fn();
		mockPalette = [
			{	locked: false,
				color: "#909C0E"
			},
			{	locked: false,
				color: "#82BBC8"
			},
			{	locked: false,
				color: "#82BBC8"
			},
			{
				locked: false,
				color: "#82BBC8"
			},
			{	locked: false,
				color: "#909C0E"
			}
		];

		wrapper = shallow(
			<Swatch 
				makePalette={mockMakePalette}
				palette={mockPalette}
			/>
		);
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('handleLock', () => {
		it.skip('should toggle lock', () => {
				const mockLockEvent = {
				target: {
					getAttribute: () => {
						return 1 }
				}
			};
			
		})
	})

	describe('mapStateToProps', () => {
		it('should return an array of objects', () => {
			const mockState = {
					palette: [
				{	locked: false,
					color: "#909C0E"
				},
				{	locked: false,
					color: "#82BBC8"
				},
				{	locked: false,
					color: "#82BBC8"
				},
				{
					locked: false,
					color: "#82BBC8"
				},
				{	locked: false,
					color: "#909C0E"
				}
			],
				projects: []
		};

			const expected = {
				palette: [
			{	locked: false,
				color: "#909C0E"
			},
			{	locked: false,
				color: "#82BBC8"
			},
			{	locked: false,
				color: "#82BBC8"
			},
			{
				locked: false,
				color: "#82BBC8"
			},
			{	locked: false,
				color: "#909C0E"
			}
		]
	};

		const mappedProps = mapStateToProps(mockState);

		expect(mappedProps).toEqual(expected);
		});
	});

	describe('mapDispatchToProps', () => {
		it('should call dispatch when using makePalette', () => {
			const mockPalette = [
				{	locked: false,
					color: "#909C0E"
				},
				{	locked: false,
					color: "#82BBC8"
				},
				{	locked: false,
					color: "#82BBC8"
				},
				{
					locked: false,
					color: "#82BBC8"
				},
				{	locked: false,
					color: "#909C0E"
				}
			]
		
		const mockDispatch = jest.fn();

		const actionToDispatch = makePalette(mockPalette);
		const mappedProps = mapDispatchToProps(mockDispatch);

		mappedProps.makePalette(mockPalette)

		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
		});
	});
});