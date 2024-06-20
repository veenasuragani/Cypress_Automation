module.exports={
    testConcurrency: 5,
   apiKey: 'K5wgbjGXRnmbLa0imtToOqBXXSwM1B3nnWFFqLDx7tQ110',
   browser: [
    //Web
    {width: 800, height: 600, name: 'chrome'},
    {width: 700, height: 500, name: 'firefox'},
    {width: 1600, height: 1200, name: 'ie11'},
    {width: 1024, height: 768, name: 'edgechromium'},
    {width: 800, height: 600, name: 'safari'},

    //mobile
    {deviceName: 'iphone X', ScreenOrientation: 'potrait'},
    {deviceName: 'Pixel 2', ScreenOrientation: 'potrait'},
    {deviceName: 'Galaxy S5', ScreenOrientation: 'potrait'},
    {deviceName: 'Nexus 10', ScreenOrientation: 'potrait'},
    {deviceName: 'iPad Pro', ScreenOrientation: 'landscape'},

   ],
   batchName: 'Modern cross browser testing'

}