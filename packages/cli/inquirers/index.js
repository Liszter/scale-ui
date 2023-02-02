/*
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-12-17 10:24:05
 * @LastEditTime: 2022-12-18 16:51:36
 * @LastEditors: lishutao
 * @Description: 暂无
 * @FilePath: \testest\index.js
 */

import inquirer from "inquirer";
import fs from "fs";


/**
 * @Description: 创建文件， 文件名 + 内容
 * @Date: 2022-12-18 09:56:53
 * @LastEditTime: Do not edit
 * @FilePath: Do not edit
 * @param {*} filename
 * @param {*} content
 */
export function createFile(filename, content) {
  fs.writeFile(`./${filename}`, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`--${filename}--创建成功`);
    }
  });
}

/**
 * @Description: 返回shell 文件
 * @Date: 2022-12-18 10:13:15
 * @LastEditTime: Do not edit
 * @FilePath: Do not edit
 * @param {*} WORK_PATH 项目的代码地址
 * @param {*} imageName 镜像名称
 * @param {*} port 映射的端口号
 */

export function shellFil (WORK_PATH, imageName, port) {
  return `
  WORK_PATH='/root/liszter/projects/${WORK_PATH}'
  cd $WORK_PATH
  echo "拉取代码"
  git pull origin develop
  echo "打包"
  npm run build:prod
  echo "执行构建"
  docker build -t ${imageName} .
  echo "停止旧容器"
  docker stop ${imageName}
  docker rm ${imageName}
  echo "启动新容器"
  docker container run -p ${port}:${port} --name ${imageName} -d ${imageName}
  `
}

/**
 * @Description: 创建nginx文件
 * @Date: 2022-12-18 10:35:46
 * @LastEditTime: Do not edit
 * @FilePath: Do not edit
 * @param {*} port 端口
 * @param {*} buildPath nginx文件名
 * @param {*} api 配置代理api
 * @param {*} address 后台地址名
 */
export function nginxFile (port, buildPath , api, address) {

  let res = ``
    if (address) {
     res = `
      server{

        listen ${port};
        server_name html;
        location / { 
            root  /usr/share/nginx/${buildPath};
            index index.html index.htm;
            try_files $uri /index.html;
        }
          location ${api} {
         	   proxy_set_header Host $http_host;
         	   proxy_set_header X-Real-IP $remote_addr;
         	   proxy_set_header REMOTE-HOST $remote_addr;
         	   proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         	   proxy_pass ${address};
           }
        }
    `
    } else {
   res = `
    server{
        listen ${port};
        server_name html;
        location / { 
            root  /usr/share/nginx/${buildPath};
            index index.html index.htm;
            try_files $uri /index.html;
        }
      }
    `
    }

  return res
} 


/**
 * @Description: 创建dockerfile文件
 * @Date: 2022-12-18 10:40:29
 * @LastEditTime: Do not edit
 * @FilePath: Do not edit
 * @param {*} imageName 镜像名称
 * @param {*} version 版本号
 * @param {*} port 端口号
 */
export function dockerfile (imageName, version='1.0.0', port) {
  return `
    FROM nginx
    LABEL name="${imageName}"
    LABEL version="${version}"
    COPY ./dist /usr/share/nginx/${imageName}
    COPY ./${imageName}.conf /etc/nginx/conf.d/${imageName}.conf
    EXPOSE ${port}
  `
}


/**
 * @Description: dockerignore 文件
 * @Date: 2022-12-18 10:42:04
 * @LastEditTime: Do not edit
 * @FilePath: Do not edit
 */
export function dockerignore() {
  return `
    .gitignore
    node_modules
    .git
  `
}



// 配置清单
const setObj = {
  workPath: 'web-homepage', // 代码地址
  imageName: "web-homepage", // 镜像名称
  port: "8082", // 端口
  api: "/prod-api", // 代理地址
  // address: "http://localhost:10000", // 后台服务地址
  version: "1.0.0"
}
// step: 0 创建shell文件
createFile(`${setObj.workPath}.sh`, shellFil(setObj.workPath, setObj.imageName, setObj.port))
// step: 1 创建 nginx 文件
createFile(`${setObj.workPath}.conf`, nginxFile(setObj.port, setObj.workPath, setObj.api, setObj.address))
// step: 2 创建dockerfile
createFile(`${setObj.imageName}`, dockerfile(setObj.imageName, setObj.version, setObj.port))
// step: 3 创建dockerfielIgnore
createFile(`dockerignore`, dockerignore())








// let step1 = await inquirer.prompt([{
//   type: "input",
//   message: "输入文件名",
//   name: "name",
//   default: ''
// }])


// console.log(step1.name)


// let step2 = await inquirer.prompt([{
//   type: "input",
//   message: "输入文件名2",
//   name: "name2",
//   default: ''
// }])


// console.log(step2.name2)




// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "请输入文件名:",
//       name: "name",
//       default: "dockerfile"
//     },
//   ])
//   .then((answers) => {
//     console.log(answers);

//     fs.writeFile(`./${answers.name}`, 'console.log(1231231)', (err) => {

//       if (err) {
//         console.log(err)
//       } else {
//         console.log('over')
//       }
//     })


//   });

