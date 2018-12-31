import 'babel-polyfill'
import express from 'express';
const app = express()
const port= 5002
import renderer  from "./helpers/renderer";
import {matchRoutes} from 'react-router-config'
import createStore from './helpers/createStore'
import Routes from '../src/routes'


app.use(express.static('build'))
app.get("*", (req, res)=>{

    const store = createStore()
    const promises = matchRoutes(Routes, req.path).map(({route})=>{
        return route.LoadData ? route.LoadData(store) : null
    })
    
    Promise.all(promises).then(()=>{
        renderer(req, res, store) 
    })
   
    
})

app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})