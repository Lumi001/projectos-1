FROM node:alpine as builder


WORKDIR '/app'




COPY ./package.json ./



RUN yarn install 
#run package installations


COPY . .

# RUN npm run prepare 
# RUN npm audit fix


# CMD ["npm","run","develop"]
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/packages/webapp/build /usr/share/nginx/html
