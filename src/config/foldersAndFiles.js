// nS - No Space
// lC - Lowercase

export function foldersAndFiles(currentAppName, newName) {
  const nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  const nS_NewName = newName.replace(/\s/g, '');

  return [
    `ios/${nS_CurrentAppName}`,
    `ios/${nS_CurrentAppName}-tvOS`,
    `ios/${nS_CurrentAppName}-tvOSTests`,
    `ios/${nS_CurrentAppName}.xcodeproj`,
    `ios/${nS_NewName}.xcodeproj/xcshareddata/xcschemes/${nS_CurrentAppName}-tvOS.xcscheme`,
    `ios/${nS_NewName}.xcodeproj/xcshareddata/xcschemes/${nS_CurrentAppName}.xcscheme`,
    `ios/${nS_CurrentAppName}Tests`,
    `ios/${nS_NewName}Tests/${nS_CurrentAppName}Tests.m`,
    `ios/${nS_CurrentAppName}.xcworkspace`,
    `ios/${nS_NewName}/${nS_CurrentAppName}.entitlements`,
    `ios/${nS_CurrentAppName}-Bridging-Header.h`,
    `macos/${nS_CurrentAppName}`,
    `macos/${nS_CurrentAppName}.xcodeproj`,
    `macos/${nS_NewName}.xcodeproj/xcshareddata/xcschemes/${nS_CurrentAppName}-macOS.xcscheme`,
    `macos/${nS_NewName}.xcodeproj/xcshareddata/xcschemes/${nS_CurrentAppName}-iOS.xcscheme`,
    `macos/${nS_CurrentAppName}.xcworkspace`,
    `macos/${nS_NewName}/${nS_CurrentAppName}.entitlements`,
    `macos/${nS_CurrentAppName}-Bridging-Header.h`,
  ];
}
