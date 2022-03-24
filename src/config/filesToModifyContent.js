// nS - No Space
// lC - Lowercase

export function filesToModifyContent(currentAppName, newName) {
  const nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  const nS_NewName = newName.replace(/\s/g, '');

  return [
    {
      regex: `<string name="app_name">${currentAppName}</string>`,
      replacement: `<string name="app_name">${newName}</string>`,
      paths: ['android/app/src/main/res/values/strings.xml'],
    },
    {
      regex: nS_CurrentAppName,
      replacement: nS_NewName,
      paths: [
        'index.js',
        'index.android.js',
        'index.ios.js',
        'index.macos.js',
        `ios/${nS_NewName}.xcodeproj/project.pbxproj`,
        `ios/${nS_NewName}.xcworkspace/contents.xcworkspacedata`,
        `ios/${nS_NewName}.xcodeproj/xcshareddata/xcschemes/${nS_NewName}-tvOS.xcscheme`,
        `ios/${nS_NewName}.xcodeproj/xcshareddata/xcschemes/${nS_NewName}.xcscheme`,
        `ios/${nS_NewName}/AppDelegate.m`,
        'android/settings.gradle',
        `ios/${nS_NewName}Tests/${nS_NewName}Tests.m`,
        'ios/build/info.plist',
        'ios/Podfile',
        `macos/${nS_NewName}.xcodeproj/project.pbxproj`,
        `macos/${nS_NewName}.xcworkspace/contents.xcworkspacedata`,
        `macos/${nS_NewName}.xcodeproj/xcshareddata/xcschemes/${nS_NewName}-macOS.xcscheme`,
        `macos/${nS_NewName}.xcodeproj/xcshareddata/xcschemes/${nS_NewName}-iOS.xcscheme`,
        `macos/${nS_NewName}/AppDelegate.m`,
        `macos/${nS_NewName}Tests/${nS_NewName}Tests.m`,
        'macos/build/info.plist',
        'macos/Podfile',
        'app.json',
      ],
    },
    {
      regex: `text="${currentAppName}"`,
      replacement: `text="${newName}"`,
      paths: [`ios/${nS_NewName}/Base.lproj/LaunchScreen.xib`],
    },
    {
      regex: currentAppName,
      replacement: newName,
      paths: [`ios/${nS_NewName}/Info.plist`],
    },
    {
      regex: currentAppName,
      replacement: newName,
      paths: [`macos/${nS_NewName}-macOS/Info.plist`],
    },
    {
      regex: currentAppName,
      replacement: newName,
      paths: [`macos/${nS_NewName}-iOS/Info.plist`],
    },
    {
      regex: `"name": "${nS_CurrentAppName}"`,
      replacement: `"name": "${nS_NewName}"`,
      paths: ['package.json'],
    },
    {
      regex: `"displayName": "${currentAppName}"`,
      replacement: `"displayName": "${newName}"`,
      paths: ['app.json'],
    },
  ];
}
