import React from 'react';
import { HashRouter } from 'react-router-dom'
import Userlist from './userlist';
import { renderComponent, fetchMock, mockStore } from '../../helpers/testHelper'

describe('<Userlist />', () => {
    beforeEach(() => {
        fetchMock.mock('https://swapi.co/api/people/', {
            status: 200,
            body: {},
        });
            
        fetchMock.mock('https://swapi.co/api/planets/3/', {
            status: 200,
            body: {},
        });
    })
    afterEach(() => {
        fetchMock.restore();
    });

    it('renders without crashing', () => {
        const state = {}
        let component = renderComponent(Userlist, state);
        
        expect(component.find("#preloader")).toHaveLength(1)
    });

    it('renders with redux data', () => {
        const state = {
            users: {
                users: [{
                    name: "test"
                },{
                    name: "test2"
                }]
            }
        }
        
        let component = renderComponent(Userlist, state);

        expect(component.find(".list-group-item").length).toEqual(2)
    });
})
