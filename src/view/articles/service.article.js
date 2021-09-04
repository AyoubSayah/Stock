
import React from 'react';
import axios from 'axios';

import API from '../api';
import { useState } from "react";
import Article from './Article';

export default function ServiceArticle() {
    const [article,setData] = useState(null)
    
        API.get(`getallarticle`).then((res)=>{
    setData(res.data)
   
        })
    return(
        <div>
         <Article Article ={article}/>
        </div>
    )
}