const config = {
//port
 port: process.env.POST || 3000,
//test enviroment
test_env:'test',
test_db:'mongodb://localhost/blog-demo-tutorial',
test_port:3001
}


export default config;