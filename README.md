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
<h2>Change the API Key</h2>

Please visit this page to change API Key - https://github.com/klevu/jsv2-early-adopters/tree/master/getting-started/5-your-api-key/magento2#once-your-api-key-has-been-activated


```
<h2>Any questions</h2>
Reach out to support@klevu.com
