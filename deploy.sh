# !/usr/bin/env sh

# build
npm run build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add .
git add dist -f
git commit -m 'deploy'

git push -u origin master
git subtree push --prefix dist origin gh-pages