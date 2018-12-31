import App from './App'
import HomePage from '../src/pages/HomePage'
import UsersListPage from '../src/pages/UsersListPage'
import Titles from '../src/pages/titlePage'


export default [
    {
        ...App,
        routes:[
            {
                ...HomePage,
                path:'/',
                exact:true
            },
            {
                ...UsersListPage,
                path:'/users',
                
            },
            {
                ...Titles,
                path:'/titles'
            }
        ]
    }
        
        
]
    
