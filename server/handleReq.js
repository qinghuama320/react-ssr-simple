import React from 'react';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import routes from '../src/router';

import Container from '../src/page/container';
import Home from '../src/page/home';

import express from 'express';
import path from 'path';

const serverRender = express.Router();

// 使用路由时，不支持直接给组件传递状态，需使用额外工具，参考react-ssr-redux
serverRender.route('*').get((req, res) => {
    console.log(req.url);

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        try{
            //渲染组件
            let state = {"extraText": "哈哈"}; // react-router不支持直接给组件传递状态
			let html = renderToString(
		      	<RouterContext {...renderProps} {...state} />
		    );
            
		    res.render('index', { html, state: JSON.stringify(state) });
			
		}catch(e){
			res.send(500, error.message);
		}
    });
});


//不使用路由时，可以将状态直接同步
/*serverRender.get('/', (req, res) => {
    let extraText = '状态同步测试——一级标题';
    let html = renderToString(
        <Container extraText={extraText}>
            <Home />
        </Container>
    );

    let state = {};
    state.extraText = extraText;

    res.render('index.ejs', { html, state: JSON.stringify(state) });
});*/


export default serverRender;