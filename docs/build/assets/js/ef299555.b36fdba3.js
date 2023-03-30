"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2288],{3562:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=o(5773),s=(o(7378),o(5318)),a=o(6538);const l='import { OpenAI } from "langchain";\nimport { SqlDatabase } from "langchain/sql_db";\nimport { createSqlAgent, SqlToolkit } from "langchain/agents";\nimport { DataSource } from "typeorm";\n\n/** This example uses Chinook database, which is a sample database available for SQL Server, Oracle, MySQL, etc.\n * To set it up follow the instructions on https://database.guide/2-sample-databases-sqlite/, placing the .db file\n * in the examples folder.\n */\nexport const run = async () => {\n  const datasource = new DataSource({\n    type: "sqlite",\n    database: "Chinook.db",\n  });\n  const db = await SqlDatabase.fromDataSourceParams({\n    appDataSource: datasource,\n  });\n  const tookit = new SqlToolkit(db);\n  const model = new OpenAI({ temperature: 0 });\n  const executor = createSqlAgent(model, tookit);\n\n  const input = `List the total sales per country. Which country\'s customers spent the most?`;\n\n  console.log(`Executing with input "${input}"...`);\n\n  const result = await executor.call({ input });\n\n  console.log(`Got output ${result.output}`);\n\n  console.log(\n    `Got intermediate steps ${JSON.stringify(\n      result.intermediateSteps,\n      null,\n      2\n    )}`\n  );\n\n  await datasource.destroy();\n};\n',i={hide_table_of_contents:!0},r="SQL Agent Toolkit",c={unversionedId:"modules/agents/toolkits/examples/sql",id:"modules/agents/toolkits/examples/sql",title:"SQL Agent Toolkit",description:"This example shows how to load and use an agent with a SQL toolkit.",source:"@site/docs/modules/agents/toolkits/examples/sql.mdx",sourceDirName:"modules/agents/toolkits/examples",slug:"/modules/agents/toolkits/examples/sql",permalink:"/langchainjs/docs/modules/agents/toolkits/examples/sql",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/agents/toolkits/examples/sql.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"OpenAPI Agent Toolkit",permalink:"/langchainjs/docs/modules/agents/toolkits/examples/openapi"},next:{title:"VectorStore Agent Toolkit",permalink:"/langchainjs/docs/modules/agents/toolkits/examples/vectorstore"}},p={},d=[],u={toc:d},m="wrapper";function g(t){let{components:e,...o}=t;return(0,s.kt)(m,(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sql-agent-toolkit"},"SQL Agent Toolkit"),(0,s.kt)("p",null,"This example shows how to load and use an agent with a SQL toolkit."),(0,s.kt)(a.Z,{language:"typescript",mdxType:"CodeBlock"},l))}g.isMDXComponent=!0}}]);