#### Notes:

```
class Meta:
    options...
```

- inner class of model class, allows to hange behavior of model fields
- optional to add

---

Dependency: `@babel/plugin-proposal-class-properties`

- This allows for async/await

---

**Webpack.config.js**

```
	optimization: {
		minimize: true,
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				// This has effect on the react lib size
				NODE_ENV: JSON.stringify('production'),
			},
		}),
	],
```

Allows for smaller files when serving to web.
