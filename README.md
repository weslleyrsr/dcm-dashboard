# dcm-dashboard
Dashboard para a ferramenta Digital Certificate Manager da IBM

![Dashboard main screen](https://i.imgur.com/Wu5CD1J.png)

## Instalação
Requisites: NodeJS 10.16.3 > & NPM > 6.11.3

Step 1 -> Clone this repository. ``` $ git clone https://github.com/H0tz/dcm-dashboard.git  ```

Step 2 -> Open the created directory (dcm-dashboard) ``` $ cd dcm-dashboard ```

Step 3 -> Run ``` $ npm install ```

Step 4 -> Open client directory (/client) ``` $ cd client ```

Step 5 -> Run ``` $ npm install ```

Step 6 -> Get back on the main directory (dcm-dashboard) ``` $ cd .. ```

Step 7 -> Run ``` $ npm run dev ```

Step 8 -> Go to http://localhost:3000/ in your browser. (when initialization finish, the script will open for you)

NOTE: In order to your API calls work, you need to create a .env file at project's root and put your DCM's API_KEY and API_CRN.