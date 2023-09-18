---
id: plugin-overview
description: Introduction to the plugin tools site on the Grafana developer portal.
keywords:
 - grafana
 - plugins
 - plugin
 - development
title: Grafana plugin developer's guide
sidebar_position: 1
---

# Grafana plugin developer's guide

You can extend Grafana's built-in capabilities with plugins. Plugins enable Grafana to accomplish specialized tasks, custom-tailored to your requirements. By making a plugin for your organization, you can connect Grafana to other data sources, ticketing tools, and CI/CD tooling.

You can create plugins for private use or contribute them to the open source community by publishing to the [Grafana plugin catalog](https://grafana.com/plugins/). This catalog has hundreds of other community and commercial plugins.

If you are a Grafana plugin developer or want to become one, this plugin developer's guide contains the tutorials and reference materials to help you get started.

## Plugin basics

You can create several types of plugins, including:

- **Panel plugins** - Visualize data and navigate between dashboards.
- **Data source plugins** - Link to new databases or other sources of data.
- **App plugins** - Create rich applications for custom out-of-the-box experiences.

:::note

To learn more about the types of plugins you can build, refer to the [Plugin management](https://grafana.com/docs/grafana/latest/administration/plugin-management/) documentation.

:::

## Contents of this developer's guide

The following topics are covered in this guide:

- **[Introduction to plugin development](https://grafana.com/developers/plugin-tools/)** - Learn the fundamentals of Grafana plugin development: backend development, SDK, data frames, and more.
- **[Get started with plugins](https://grafana.com/developers/plugin-tools/get-started)** - Start developing Grafana plugins with the [create-plugin](https://www.npmjs.com/package/@grafana/create-plugin) tool.
- **[Tutorials](https://grafana.com/developers/plugin-tools/tutorials)** - Follow these step-by-step guides for creating data source plugins, logs data source plugins, panel plugins, and more. 
- **[Create a plugin](https://grafana.com/developers/plugin-tools/create-a-plugin)** - If you're familiar with plugin creation, use these how-to guides for adding authentication, anonymous usage reporting, setting up GitHub workflows, and more.
- **[Publish a plugin](https://grafana.com/developers/plugin-tools/publish-a-plugin)** - Learn about publishing a plugin to the Grafana plugin catalog, including publishing criteria, packaging, and deployment.
- **[Migrate a plugin](https://grafana.com/developers/plugin-tools/migration-guide)** - Consult these documents if you need to work with a plugin written in deprecated technology.
- **[Reference](https://grafana.com/developers/plugin-tools/metadata.md)** - Description of the `plugin.json` schema and plugin metadata.

## Go further

Learn more about additional tools and see plugin type examples.

### User interface creation

Explore the many UI components in our [Grafana UI library](https://developers.grafana.com/ui/latest/index.html).

### Plugin examples

Grafana Labs provides a number of best practice example plugins for different use cases to help you quickly get started. Browse our [plugin examples](https://github.com/grafana/grafana-plugin-examples).

### SDK

Learn more about [Grafana Plugin SDK for Go](https://pkg.go.dev/github.com/grafana/grafana-plugin-sdk-go) that provides a set of packages that you can use to implement a backend plugin.