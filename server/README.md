## Notes:

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

---

**Remember to add things into `settings.py` file**

---

Sessions - unique key (IP Address) will be stored in memory

---

### TypeError: Cannot read properties of underfined (reading 'push') at eval

This is due to class based errors. Potentially fixed if using functional components.
Fix: Create custom hook that utilizes a wrapper & useNavigate from `react-router-dom`

[docs](https://devdocs.io/react_router/start/faq#what-happened-to-withrouter-i-need-it)

`window.location.href = `/room/${roomCode}`;` works,

TODO:

- Look into pros and cons of using window.location.href

---
