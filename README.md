# M2 2 - JSAPIv2 - Beta

<h2>Enable the extension</h2>

1. Enable the extension and clear static view files
```
php bin/magento module:enable Klevu_JSv2 --clear-static-content
```
2. Register the extension
```
php bin/magento setup:upgrade
```
3. Recompile Magento project as needed, depending on deployment mode
```
php bin/magento setup:di:compile
```
4. Verify that the extension is enabled
```
php bin/magento module:status Klevu_JSv2
```
5. Deploy static content deploy
```
php bin/magento setup:static-content:deploy

```
