# Deployment

## Build project
```powershell
bun run build
```

## Preview project
```powershell
bun dev
```

## Update github pages
```powershell
git commit -m "update" -a

git push -f origin main
```

### If not working, delete .astro and dist folder, rebuild the project, update github