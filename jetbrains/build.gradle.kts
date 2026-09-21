plugins {
  id("org.jetbrains.intellij.platform") version "2.10.4"
}

group = providers.gradleProperty("pluginGroup").get()
version = providers.gradleProperty("pluginVersion").get()

repositories {
  mavenCentral()
  intellijPlatform {
    defaultRepositories()
  }
}

dependencies {
  intellijPlatform {
    // IC and IU were unified into one distribution starting 2025.3; intellijIdea()
    // targets it (use intellijIdeaCommunity()/intellijIdeaUltimate() for older versions).
    intellijIdea(providers.gradleProperty("platformVersion"))
  }
}

intellijPlatform {
  pluginConfiguration {
    name = "lucy"
  }
}
