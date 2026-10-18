
FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY add-expense.html /usr/share/nginx/html/
COPY budget.html /usr/share/nginx/html/
COPY insights.html /usr/share/nginx/html/
COPY ledger.html /usr/share/nginx/html/
COPY shared.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
