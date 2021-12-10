"use strict";(self.webpackChunkrethinkdocs=self.webpackChunkrethinkdocs||[]).push([[489],{9666:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),r=["components"],i={title:"Open Source"},s=void 0,d={unversionedId:"dns/open-source",id:"dns/open-source",isDocsHomePage:!1,title:"Open Source",description:"The free and open source RethinkDNS Resolver is serverless and supports protocols: DNS over HTTPS (DoH) & DNS over TLS (DoT). It can be configured with custom blocklists. And can be hosted on cloudflare, fly.io or deno-deploy. Source code is made available at github.com/serverless-dns/serverless-dns.",source:"@site/docs/dns/open-source.md",sourceDirName:"dns",slug:"/dns/open-source",permalink:"/docs/dns/open-source",editUrl:"https://github.com/celzero/docs/edit/main/docs/dns/open-source.md",version:"current",frontMatter:{title:"Open Source"},sidebar:"docs",previous:{title:"Rethink DNS",permalink:"/docs/dns"},next:{title:"Rethink Firewall",permalink:"/docs/firewall"}},p=[{value:"Hosting your own DNS Resolver",id:"hosting",children:[{value:"Using Cloudflare",id:"cloudflare",children:[]},{value:"Using Deno-Deploy",id:"deno-deploy",children:[]},{value:"Using Fly.io",id:"fly-io",children:[]}]}],c={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The free and open source RethinkDNS Resolver is serverless and supports protocols: DNS over HTTPS (DoH) & DNS over TLS (DoT). It can be configured with custom blocklists. And can be hosted on cloudflare, fly.io or deno-deploy. Source code is made available at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/serverless-dns/serverless-dns"},"github.com/serverless-dns/serverless-dns"),"."),(0,o.kt)("h2",{id:"hosting"},"Hosting your own DNS Resolver"),(0,o.kt)("p",null,"This serverless DNS can be hosted to three platforms: Cloudflare, Deno-Deploy and Fly.io. Easiest way would be to use Cloudflare. The below table summarizes the platforms available."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Platform"),(0,o.kt)("th",{parentName:"tr",align:null},"Difficulty"),(0,o.kt)("th",{parentName:"tr",align:null},"Resolver Protocol"),(0,o.kt)("th",{parentName:"tr",align:null},"Instructions"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u26c5 Cloudflare"),(0,o.kt)("td",{parentName:"tr",align:null},"Easy"),(0,o.kt)("td",{parentName:"tr",align:null},"HTTPS"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#cloudflare"},"Read Instructions"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83e\udd95 Deno Deploy"),(0,o.kt)("td",{parentName:"tr",align:null},"Moderate"),(0,o.kt)("td",{parentName:"tr",align:null},"HTTPS"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#deno-deploy"},"Read Instructions"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83e\udeb0 Fly"),(0,o.kt)("td",{parentName:"tr",align:null},"Hard"),(0,o.kt)("td",{parentName:"tr",align:null},"TLS & HTTPS"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#fly-io"},"Read Instructions"))))),(0,o.kt)("h3",{id:"cloudflare"},"Using Cloudflare"),(0,o.kt)("p",null,"Rethink serverless can be hosted to cloudflare. User will be liable for cloudflare billing. Click the below button to deploy."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://deploy.workers.cloudflare.com/?url=https://github.com/serverless-dns/serverless-dns/"},(0,o.kt)("img",{parentName:"a",src:"https://deploy.workers.cloudflare.com/button",alt:"Deploy to Cloudflare Workers"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configure",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Once the hosting is successful, lets consider rethink serverless dns is hosted\nto ",(0,o.kt)("inlineCode",{parentName:"li"},"example.com"),"."),(0,o.kt)("li",{parentName:"ul"},"To configure your dns level blocking visit to ",(0,o.kt)("inlineCode",{parentName:"li"},"example.com/configure")," which\nwill take to configuration page, which currently contains 171 blocklists with\n5 Million too block domains in category like notracking, dating, gambling,\nprivacy, porn, cryptojacking, security ..."),(0,o.kt)("li",{parentName:"ul"},"Navigate through and select your blocklists."),(0,o.kt)("li",{parentName:"ul"},"Once selected you can find your domain name ",(0,o.kt)("inlineCode",{parentName:"li"},"example.com")," followed by\nconfiguration token on screen like this ",(0,o.kt)("inlineCode",{parentName:"li"},"https://example.com/1:AIAA7g==")," copy\nit and add to your dns DOH client."),(0,o.kt)("li",{parentName:"ul"},"Now your own trusted dns resolver with custom blocking is up and running.")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change Resolver",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"By default dns request are resolved by cloudflare ",(0,o.kt)("inlineCode",{parentName:"li"},"cloudflare-dns.com"),"."),(0,o.kt)("li",{parentName:"ul"},"To change resolver login to your cloudflare dash board",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"click on ",(0,o.kt)("inlineCode",{parentName:"li"},"worker")),(0,o.kt)("li",{parentName:"ul"},"click on ",(0,o.kt)("inlineCode",{parentName:"li"},"serverless-dns")," worker"),(0,o.kt)("li",{parentName:"ul"},"click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," tab"),(0,o.kt)("li",{parentName:"ul"},"under ",(0,o.kt)("inlineCode",{parentName:"li"},"Environment Variables")," click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Edit variables")),(0,o.kt)("li",{parentName:"ul"},"if your new DOH resolver url is ",(0,o.kt)("inlineCode",{parentName:"li"},"example.dns.resolver.com/dns-query/resolve")),(0,o.kt)("li",{parentName:"ul"},"change below variables and click on save button\n",(0,o.kt)("inlineCode",{parentName:"li"},"CF_DNS_RESOLVER_URL = example.dns.resolver.com/dns-query/resolve"))))))),(0,o.kt)("h3",{id:"deno-deploy"},"Using Deno-Deploy"),(0,o.kt)("p",null,"This project can be hosted on ",(0,o.kt)("a",{parentName:"p",href:"https://deno.com/deploy"},"deno.com/deploy")," and supports DoH only. User will be liable for deno.com billing."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fork the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/serverless-dns/serverless-dns"},"serverless-dns repository")," (You will need a GitHub account)."),(0,o.kt)("li",{parentName:"ol"},"In your fork, click on the ",(0,o.kt)("em",{parentName:"li"},"Actions")," tab and Confirm that you want to use Actions, if asked."),(0,o.kt)("li",{parentName:"ol"},'Click on "\ud83e\udd95 Deno deploy" on the left pane. Click on the "Run workflow" dropdown on the right side, and run the workflow using the ',(0,o.kt)("kbd",null,"Run workflow")," button."),(0,o.kt)("li",{parentName:"ol"},"Now, navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://deno.com/deploy"},"deno.com/deploy")," and Sign Up for an account."),(0,o.kt)("li",{parentName:"ol"},"Create a new project in ",(0,o.kt)("a",{parentName:"li",href:"https://dash.deno.com"},"deno deploy dash"),". Name it appropriately."),(0,o.kt)("li",{parentName:"ol"},'Click on "Continue" button under "Deploy from GitHub" and proceed to install the GitHub app on your GitHub Account. Make sure you give access the fork repository you had made in step 1.'),(0,o.kt)("li",{parentName:"ol"},'Now, head back the deno dash and select the repository as the fork you had made in step 1, for integration. Select branch as "build/deno-deploy/dev", and select the file as "http.bundle.js".'),(0,o.kt)("li",{parentName:"ol"},"Open deno dash and select the project, navigate to Settings -> Environment variables (",(0,o.kt)("inlineCode",{parentName:"li"},"https://dash.deno.com/projects/<project-name>/settings/envs"),"). Add the essential environment variables as described in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/serverless-dns/serverless-dns/blob/main/.env.example"},(0,o.kt)("inlineCode",{parentName:"a"},".env.example"))," file as ",(0,o.kt)("inlineCode",{parentName:"li"},'key = "value"')," pairs. Values of the required variables can be inferred from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/serverless-dns/serverless-dns/blob/main/wrangler.toml"},(0,o.kt)("inlineCode",{parentName:"a"},"wrangler.toml"))," and/or ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/serverless-dns/serverless-dns/blob/main/fly.toml"},(0,o.kt)("inlineCode",{parentName:"a"},"fly.toml"))," files."),(0,o.kt)("li",{parentName:"ol"},"Done. Now your DoH resolver should be available on ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<name>.deno.dev"),", where ",(0,o.kt)("inlineCode",{parentName:"li"},"<name>")," is the name of the project you had created on step 5.")),(0,o.kt)("h3",{id:"fly-io"},"Using Fly.io"),(0,o.kt)("p",null,"This project can be hosted on ",(0,o.kt)("a",{parentName:"p",href:"https://fly.io"},"fly.io"),", and can support both DoT and DoH protocols. User will be liable for fly.io billing."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"flyctl")," on your device. Please ",(0,o.kt)("a",{parentName:"li",href:"https://fly.io/docs/getting-started/installing-flyctl/"},"refer to fly.io docs")," for the same."),(0,o.kt)("li",{parentName:"ol"},"Signup or Login to fly.io. Please ",(0,o.kt)("a",{parentName:"li",href:"https://fly.io/docs/getting-started/login-to-fly/"},"refer to fly.io docs")," for the same."),(0,o.kt)("li",{parentName:"ol"},"Create an empty directory anywhere on your PC. Open you terminal or powershell and navigate to this directory."),(0,o.kt)("li",{parentName:"ol"},"Launch a fly app",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flyctl launch\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Choose a unique name here or let it auto-generate."),(0,o.kt)("li",{parentName:"ul"},"Choose a location (closest to you would be better for you to use)."),(0,o.kt)("li",{parentName:"ul"},"Note down the name of the app and you may delete this directory along with the generated ",(0,o.kt)("inlineCode",{parentName:"li"},"fly.toml"),"."))),(0,o.kt)("li",{parentName:"ol"},"Now, you would need a SSL or TLS certificate for your domain name. Both getting a domain name and CA certificate generation are beyond the scope of this README."),(0,o.kt)("li",{parentName:"ol"},"Once you have your CA certificate and key files, you need to encode them as base64 with no wrapping. How this can be done in bash terminal is shown below.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Locate your CA certificate & key files\nCRT="path/to/full-chain-certificate.pem"\nKEY="path/to/key.pem"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Encode them in base64 with no wrappings and store them in variables\nB64NOWRAP_KEY="$(base64 -w0 "$KEY")"\nB64NOWRAP_CRT="$(base64 -w0 "$CRT")"\n'))),(0,o.kt)("li",{parentName:"ol"},"As described in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/serverless-dns/serverless-dns/blob/main/.env.example"},(0,o.kt)("inlineCode",{parentName:"a"},".env.example"))," file, this base64 encoded certificate-key pair need to set as a single environment variable called ",(0,o.kt)("inlineCode",{parentName:"li"},"TLS_"),". Within this variable, the certificate and key encodings needs to be separated by a newline (",(0,o.kt)("inlineCode",{parentName:"li"},"\\n"),") and described by ",(0,o.kt)("inlineCode",{parentName:"li"},"CRT=")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"KEY="),". On a bash terminal this can be done by following steps continued by by above.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# This creates a single file called "FLY_TLS" in the current directory\necho "KEY=$B64NOWRAP_KEY" > FLY_TLS\necho "CRT=$B64NOWRAP_CRT" >> FLY_TLS\n# And now, this "FLY_TLS" file contains both certificate and key encoded and\n# as required\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Upload this to fly secrets like so in terminal or powershell:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"fly secrets set TLS_=- < FLY_TLS -a app-id\n")),'where "app-id" is the name of the fly app you had launched in step 4.'),(0,o.kt)("li",{parentName:"ul"},"Other essential environment variables are already present in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/serverless-dns/serverless-dns/blob/main/fly.toml"},(0,o.kt)("inlineCode",{parentName:"a"},"fly.toml"))," file of this repository, but you may read ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/serverless-dns/serverless-dns/blob/main/.env.example"},(0,o.kt)("inlineCode",{parentName:"a"},".env.example"))," for it's use case and configuration."))),(0,o.kt)("li",{parentName:"ol"},"Fork the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/serverless-dns/serverless-dns"},"serverless-dns repository")," (You will need a GitHub account)."),(0,o.kt)("li",{parentName:"ol"},"In your fork, click on the ",(0,o.kt)("em",{parentName:"li"},"Actions")," tab and Confirm that you want to use Actions, if asked."),(0,o.kt)("li",{parentName:"ol"},"Similarly, click on ",(0,o.kt)("em",{parentName:"li"},"Settings")," tab and select ",(0,o.kt)("em",{parentName:"li"},"Secrets")," on the left pane. Add a new GitHub secret called ",(0,o.kt)("strong",{parentName:"li"},"FLY_APP_NAME")," and set it's value as the name of the fly app you had launched in step 4. And add another secret called ",(0,o.kt)("strong",{parentName:"li"},"FLY_API_TOKEN")," and set's value as what you get from running ",(0,o.kt)("inlineCode",{parentName:"li"},"flyctl auth token")," in terminal or powershell."),(0,o.kt)("li",{parentName:"ol"},"Head back to ",(0,o.kt)("em",{parentName:"li"},"Actions"),' tab and click on "\ud83e\udeb0 Fly" on the left pane. Click on the "Run workflow" dropdown on the right side, and run the workflow using the ',(0,o.kt)("kbd",null,"Run workflow")," button."),(0,o.kt)("li",{parentName:"ol"},"Once this action workflow finishes, open the terminal or powershell again and type in:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flyctl ips list -a app-id\n")),'where "app-id" is the name of the fly app you had launched in step 4.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Here, you can get the IP address of the application, update the DNS records of your domain name you had used in step 5."))),(0,o.kt)("li",{parentName:"ol"},"Done. Your application should be available on the said domain name in a few minutes. To configure, say, to change the upstream resolver, you can edit the environment variables on ",(0,o.kt)("inlineCode",{parentName:"li"},"fly.toml")," file of your fork and re-run the Action workflow.")))}m.isMDXComponent=!0}}]);