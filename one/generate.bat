
for %%a in (%list%) do (
    npx nest generate module %%a && nest generate controller %%a && nest generate service %%a
)