// ==UserScript==
// @name         123云盘优化助手
// @namespace    https://geoisam.github.io
// @version      1.1.2
// @description  优化123云盘使用体验，支持电脑端和移动端
// @author       geoisam@qq.com
// @icon         data:image/x-icon;base64,AAABAAEAQEAAAAEAIAAoQgAAFgAAACgAAABAAAAAgAAAAAEAIAAAAAAAAEAAAMMOAADDDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPt8WAD7fFgC+3xYB/t8WBf7fFhQ+3xYkPt8WMD7fFji+3xY9Px9Wfr8fVn7+3xY+/x9Wfv7fFj7/H1Z+/t8WPv8fVn7/H1Z+/x9Wfv8fVn7/H1Z+/x9Wfv7fVn7+31Z+/t9Wfv7fVn7/H1Z+/x9Wfv8fVn7+3xY+/x9Wfv7fFj7/H1Z+/x9Wfv8fVn7/H1Z+/x9Wfv8fVn7/H1Z+/x9Wfr7fFj1+3xY5Pt8WMP7fFiU+3xYVPt8WBn7fFgI+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAD7fFgF+3xYJft8WIL7fFjV/H1Z8ft9Wff8fVn6+31Z/ft9Wf78fVn//H1Z//x9Wf/8fVn//H1Z//t9Wf/8fVn/+31Z//x9Wf/8fVn//H1Z//t9Wf/7fVn/+31Y//t9Wf/7fVn/+31Z//x9WP/8fVn/+31Z//x9Wf/7fVn//H1Z//t9Wf/8fVn/+31Z//x9Wf/8fVn//H1Z//t9Wf/8fVn/+31Z/vt9Wf38fVn7/H1Z9/x9WfL7fFjZ+3xYift8WCr7fFgG+3xYAft8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAH7fFgQ+3xYc/t8WNn8fVn1/H1Z/fx9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z/fx9Wfb7fFjd+3xYfPt8WBP7fFgC+3xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAL7fFgm+3xYrvt9We/7fVn9+31Z//t8Wf/7fFj/+3xY//t9Wf/7fVn/+31Z//t9Wf/7fFj/+3xY//t8Wf/7fVn/+31Z//t9Wf/7fFj/+3xY//t8Wf/7fVn/+31Z//t9Wf/7fVj/+3xY//t8WP/7fFj/+31Y//t9Wf/7fVn/+31Z//t8Wf/7fFj/+3xY//t9Wf/7fVn/+31Z//t8Wf/7fFj/+3xY//t9Wf/7fVn/+31Z//t9Wf/7fFj/+3xY//t8Wf/7fVn/+31Z/vt9WfD7fFi2+3xYLft8WAP7fFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAL7fFgx+3xYxvt9Wff7fFj/+3xY//t8WP/7fVn/+3xY//t8WP/7fVj/+31Z//t9Wf/7fVj/+3xY//t8WP/7fVn/+3xY//t8WP/7fFj/+31Z//t9WP/7fFj/+3xY//t8WP/7fVj/+31Y//t8WP/7fFj/+3xY//t9WP/7fFj/+3xY//t8WP/7fVj/+31Y//t9Wf/7fFj/+3xY//t8WP/7fVn/+3xY//t8WP/7fVj/+31Z//t9Wf/7fVj/+3xY//t8WP/7fVn/+3xY//t8WP/7fFj/+31Z+ft8WMz7fFg5+3xYA/t8WAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAH7fFgp+3xYxvx9WPn8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn7+3xYzft8WDH7fFgC+3xYAAAAAAAAAAAAAAAAAPt8WAH7fFgT+3xYtfx9Wfj7fVj//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//t9WP/8fVn//H1Z//t9Wf/8fVn//H1Z//x9Wf/8fVn/+31Y//x9Wf/8fVn//H1Z//x9Wf/7fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn/+31Z//x9Wf/7fVj//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//t9WP/8fVn//H1Z//t9Wf/8fVn//H1Z//x9Wf/8fVn/+31Y//x9Wf/8fVn//H1Z//x9Wfn7fFi++3xYGft8WAEAAAAAAAAAAPt8WAD7fFgG+3xYgfx9WfD8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z8/t8WI/7fFgG+3xYAAAAAAD7fFgC+3xYMft8WOD8fFn+/HxZ//x8Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fFn//HxZ//x8Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fFn//HxZ//x8Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fFn//HxZ//x8Wf77fFjk+3xYPPt8WAMAAAAA+3xYB/t8WJb7fFj3+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xZ//t8WP/7fFn/+3xZ//t8Wf/7fFn/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xZ//t8WP/7fFn/+3xZ//t8Wf/7fFn/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xY+Pt8WKT7fFgI+3xYAft8WCL7fFjg/HxY/vx8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP77fFnm+3xYLft8WAX7fFhj/HxY8/x8Wf/7fFj/+3xY//x8Wf/7fFj/+3xZ//x8WP/8fFj/+3xZ//x8Wf/8fFj//HxZ//x8Wf/8fFn//HxZ//x8WP/8fFn/+3xZ//x8WP/8fFn/+3xZ//t8WP/8fFj//HxY//t8WP/8fFj//HxY//x8WP/8fFj//HxZ//x8WP/8fFj//HxY//x8WP/7fFj//HxY//x8Wf/7fFj/+3xZ//x8WP/8fFj/+3xZ//x8Wf/8fFj//HxZ//x8Wf/8fFn//HxZ//x8WP/8fFn/+3xZ//x8WP/8fFn/+3xZ//t8WP/8fFj/+3xY//t8WP/8fFn//HxY9Pt8WHL7fFgJ+3xYovt8Wfn8fFn//HxZ//t8Wf/8fFn/+3xY//x8Wf/8fVn/+3xY//x8Wf/8fFn//H1Z//x8Wf/7fFn/+3xZ//t8Wf/7fFn//HxZ//x8Wf/7fFj//HxZ//x8Wf/7fFj//H1Y//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn/+3xZ//x8Wf/8fFn/+3xZ//t8Wf/8fFn/+3xY//x8Wf/8fVn/+3xY//x8Wf/8fFn//H1Z//x8Wf/7fFn/+3xZ//t8Wf/7fFn//HxZ//x8Wf/7fFj//HxZ//x8Wf/7fFj//H1Z//x8Wf/8fFn//HxZ//x9Wfr7fFix+3xYDPt8WND7fVj9+31Z//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Y//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9Wf/7fVn++3xY3Pt8WBn7fFjo/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9WO37fFgm+3xY7/t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFjw+3xYLPx8WPD8fVn//H1Z//x9Wf/8fVj++3xZw/t8WK77fFit+3xYrft8WK37fFis/HxY2Px8WPr8fFj/+3xY3/t8WLb7fFis+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WKv7fFjC/HxY7/x9WP/8fFj//HxY5/t8WLb7fFis+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYr/t8WLP7fFi8+3xYzPt8WOf7fFj//HxY//x8WP/8fVj//H1Y//x8WP/8fVj//H1Z//x9Wf/8fVn//HxY8ft8WCz7fVjw/H1Y//t9WP/7fVj//H1Y/Pt8WV77fFgn+3xYI/t8WCP7fFgj+3xYIvx9WZb8fVjx+31Y//t8WKn7fFg7+3xYIft8WCP7fFgj+3xYI/t8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Wf/7fVn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+31Z//t9Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFnk+3xYXvt8WAAAAAAAAAAAAPt8WAD7fFgD+3xYOft8Wfv7fFn/+3xZ//t8Wf/7fFnx+3xYLPx8WfD8fFn//HxZ//x8Wf/8fVn7+3xZRPt8WQX7fFkAAAAAAAAAAAD8fFkA/HxZhfx9We/8fFn/+3xYoft8WB77fFgAAAAAAAAAAAD7fFgA+3xYSft8WdP8fFn//HxZ//x9Wf/8fVn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fVn//H1Z//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//H1Z6vt8WHX7fFgAAAAAAAAAAAD7fFgA+3xYBft8WEL8fVn7/HxZ//x8Wf/8fFn//HxZ8ft8WCz7fFjw+3xY//t8WP/7fFj/+3xY+/t8WUT7fFkF+3xZAAAAAAAAAAAA/H1YAPx9WIX8fFjv+3xY//t8WLD7fFgj+3xYAAAAAAAAAAAA+3xYAPt8WCf7fFjB+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WOD7fFhL+3xYAAAAAAAAAAAA+3xYAPt8WAn7fFhi+3xY/Pt8WP/7fFj/+3xY//t8WPH7fFgs+3xY8Pt8Wf/7fFn/+3xY//t8WPv7fFlE+3xZBft8WQAAAAAAAAAAAPx9WQD8fVmF+3xZ7/t8Wf/7fFjM+3xYLPt8WAAAAAAAAAAAAPt8WAD7fFgF+3xYd/t8WOf7fFj/+3xZ//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFn/+3xZ//t8WP/7fFj/+3xY//t8WP/7fFn/+3xZ//t8WP/7fFj/+3xY//t8WOn7fFiG+3xYEft8WAAAAAAAAAAAAPt8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WO/7fFj/+3xY//t8WP/7fFj/+3xY8ft8WCz8fVjw/H1Y//x9WP/8fVj//H1Y+/t8WET7fFkF+3xZAAAAAAAAAAAA/H1ZAPx9WYX8fVnv/H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/7fVj2+3xYkft8WB37fFgAAAAAAAAAAAD7fFgA+ntXAvt8WHn7fFj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//t9WP/7fFj6+3xY0/t8WHT7fFgM+3xYAAAAAAAAAAAA+3xYAPt8WBb7fFi1/HxY/fx9WP/8fVj//H1Y//x9WPH7fFgs+31Z8Pt9Wf/7fVn/+31Z//t9Wfv7fFlE+3xYBft8WAAAAAAAAAAAAPx9WQD8fVmF+31Z7/t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wdn7fFhO+3xYAAAAAAAAAAAA+XpWAPt8WAD7fFhp+3xY//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fFjd+3xYQPt8WAAAAAAAAAAAAPt8WAD7fFgL+3xYcPt9Wfz7fVn/+31Z//t9Wf/7fVnx+3xYLPx9WfD8fVj//H1Z//x9Wf/8fVn7+3xZRPt8WQX7fFkAAAAAAAAAAAD7fFgA+3xYhfx9WO/8fVn//H1Z//x9Wf/8fVn//H1Z//x9WP/8fVj//H1Z//x9Wf/8fVn//H1Y//x9Wf/8fVn//H1Z//x9Wf/8fVno+3xYXPt8WAAAAAAAAAAAAAAAAAD7fFgA+3xYZPt8WPr8fVn//H1Z//x9WP/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Y6Pt8WGz7fFgAAAAAAAAAAAD7fFgA+3xYBvt8WEv8fVn7/H1Z//x9Wf/8fVj//H1Z8ft8WCz8fVnw/H1Z//x9Wf/8fVn//H1Z+/t8WET7fFgF+3xYAAAAAAAAAAAA/HxZAPx8WYX8fVnv/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9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WDP7fFg/+3xYY/t8WK77fFjv+3xY//t8WP/7fFj/+3xY//t8WP/7fFjA+3xYQfx9WSf8fVkp/H1ZKfx9WSn8fVkp/H1ZKfx9WSn8fVkp/H1YKft8WCv7fFgv+3xYN/t8WFL7fFiV+3xY6vt8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFjx+3xYK/x8WPD8fFj//HxY//x8WP/8fFj++3xZy/x9Wbn8fVm4/H1ZuPx9Wbj8fVm4/H1Z3fx8WPr8fFj//HxY+/x8WMj8fVm3/H1ZuPx9Wbj8fVm4/H1ZuPx9Wbj8fVm4/H1ZuPx9Wbj8fVi4+3xYuft8WMD7fFjS+3xY7fx8WP78fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY6vx8WMD8fVm3/H1ZuPx9Wbj8fVm4/H1ZuPx9Wbj8fVm4/H1YuPx9WLn7fFi++3xYx/t8WNz7fFj7/HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY8ft8WCX8fFnu/HxY//x8WP/8fFj//HxY//x8Wf/8fFj//HxY//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj/+3xY//t8WP/8fFn//HxZ//x8Wf/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxZ//x8Wf/8fFj//HxY//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj/+3xY//x8WP/8fFn//HxY//x8Wf/8fFj//HxY//x8WfD7fFgX+3xY5ft9WP77fVj/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVj/+31Z//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Z//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Z//t9WP/7fVn/+31Y//t9Wf/7fVj/+31Z//t9Wf/7fVn/+31Y//t9WP/7fVjr+3xYDPt8WM38fVn8/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn9+3xY2vt8WAn7fFie+3xY+Pt8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t9WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t9WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY+vt8WK37fFgF+3xYXvt9WPL7fVj/+3xY//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fFj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+3xY//t9WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t8WP/7fFj/+31Y//t9WPT7fFhs+3xYAft8WB77fFjd/H1Y/vx9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fFj//H1Y//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fFj//H1Y//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP77fFjj+3xYKQAAAAD7fFgH+3xYkPt9Wfb7fVj//H1Y//t9WP/7fVj/+31Z//t9WP/7fVj/+31Y//x9Wf/7fVj/+31Z//t9WP/7fVj/+31Z//t9WP/8fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj//H1Y//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Y//t9Wf/7fVn/+31Z//t9Wf/7fVj//H1Y//t9WP/7fVj/+31Z//t9WP/7fVj/+31Y//x9Wf/7fVj/+31Z//t9WP/7fVj/+31Z//t9WP/8fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj//H1Y//t9WP/7fVn4+3xYnvt8WAcAAAAA+3xYAvt8WCv7fFjc+31Z/ft9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn++3xY4vt8WDb7fFgCAAAAAPt8WAD7fFgF+3xYefx9We78fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z8ft8WIb7fFgG+3xYAAAAAAAAAAAA+3xYAPt8WBD7fFiu+31Z9vt9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t8Wf/7fVn/+3xZ//t8Wf/7fVn/+31Z//t9Wf/7fFn/+3xZ//t9Wf/7fFn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z+Pt8WLf7fFgV+3xYAQAAAAAAAAAAAAAAAPt8WAD7fFgB+3xYI/t8WMD8fFj4/HxY//x8Wf/8fFj//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxY//x8Wf/8fFj//HxY//x8WP/8fFj//HxY//x8Wf/8fFj//HxY//x8WP/8fFj//HxY//x8Wf/8fFn//HxY//x8WP/8fFj//HxY//x8Wf/8fFj//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxY//x8Wf/8fFj//HxY+vt8WMj7fFgr+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAL7fFgr+3xYvvx8WPX8fFn+/HxY//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8Wf/8fFn//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFn//HxY//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8Wf/8fFn//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY9/t8WMT7fFgx+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7fFgA+3xYAvt8WCD7fFil+3xZ6/t8Wf37fFn/+3xZ//t8Wf/7fFn/+31Z//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+31Z//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn9+3xZ7ft8WK77fFgm+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPt8WAD7fFgB+3xYC/t8WGf7fFjT+31Y8/t9WPz7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+3xY//t9WP/7fFj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+3xY//t9WP37fFj0+3xY1vt8WHD7fFgO+3xYAft8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+nxYAPp8WAD7fFgE+3xYHft8WHb7fFjM/H1Z7fx9WfX8fVn5/H1Z/Px9Wf38fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/fx9Wfz8fVn5/H1Z9vx9We77fFjR+3xYfPt8WCH7fFgF+3xYAPt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAH7fFgF+3xYD/t8WED7fFh7+3xYqPt8WMf7fFjZ/H1Z3/x9WeD8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/t8WNv7fFjK+3xYrPt8WH77fFhF+3xYEvt8WAb7fFgB+3xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+ntXAPp7VwD7fFgD+3xYB/t8WAr7fFgM+3xYDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ37fFgN+3xYDPt8WAr7fFgH+3xYBPt8WAH7fFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAH/8AAAAAAAAH/gAAAAAAAAP8AAAAAAAAAfgAAAAAAAAA8AAAAAAAAABwAAAAAAAAAGAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPB//+B/+AAA8H//4H/+AADwf//gf/8AAPB4AAAAH4AA8HgAAAAPgADweAAAAAeAAPB4AAAAB4AA8HgAAAAHgADweAAAAAeAAPB4AAAAB4AA8HwAAAAPAADwPgAAAD4AAPA//wAf/AAA8B//gB/8AADwB//AH/wAAPAAB+AAPgAA8AAD4AAPAADwAAHgAAeAAPAAAfAAB4AA8AAB8AAHgADwAAHwAAeAAPAAAeAAB4AA8AAD4AAPgADwAA/gAB8AAPB//8B//wAA8H//gH/+AADwf/4Af/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAACAAAAAAAAAAMAAAAAAAAABwAAAAAAAAAHgAAAAAAAAA/AAAAAAAAAH+AAAAAAAAA/8AAAAAAAAH/8AAAAAAAB//+AAAAAAA/8=
// @homepage     https://github.com/geoisam/FuckScripts
// @supportURL   https://github.com/geoisam/FuckScripts/issues
// @require      https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.22.2/sweetalert2.min.js
// @resource     swalStyle https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.22.2/sweetalert2.min.css
// @match        http*://*.123pan.com/*
// @match        http*://*.123pan.cn/*
// @match        http*://*.123684.com/*
// @match        http*://*.123865.com/*
// @match        http*://*.123912.com/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_getResourceText
// @grant        GM_registerMenuCommand
// @tips         此脚本一直为 开源免费 使用，如果你是从某些地方买的话，你就是被骗了
// ==/UserScript==


(function () {
    "use strict";

    const pjs = {
        option: [{
            name: "popup_payment_hidden",
            value: true
        }, {
            name: "video_speed_diy",
            value: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 5]
        }],
        getValue(name, value) {
            return GM_getValue(name, value)
        },
        setValue(name, value) {
            GM_setValue(name, value)
        }
    }

    const main = {
        initValue() {
            pjs.option.forEach((v) => {
                pjs.getValue(v.name) === undefined && pjs.setValue(v.name, v.value)
            })
        },

        addPluginStyle() {
            GM_addStyle(`
.swal2-title { margin-bottom: 1.25em !important;}
.pjs-popup { font-size: 14px !important;font-weight: bold !important;}
.pjs-setting-label { display: flex;align-items: center;justify-content: space-between;padding: 12px 0;}
.pjs-setting-label input[type="checkbox"] { position: absolute;opacity: 0;width: 0;height: 0;}
.pjs-setting-label input[type="text"] { flex: 1; padding: 8px 10px; border: 1px solid; border-radius: 5px; font-size: 14px }
.pjs-setting-checkbox { position: relative;display: inline-block;width: 48px;height: 26px;background-color: #e0e0e0;border-radius: 19px;transition: background-color 0.3s;}
.pjs-setting-checkbox::before { content: "";position: absolute;left: 2px;top: 2px;width: 22px;height: 22px;background-color: #fff;border-radius: 50%;box-shadow: 0 2px 4px rgba(0,0,0,0.3);transition: transform 0.3s;}
.pjs-setting-label input:checked + .pjs-setting-checkbox { background-color: #7066e0;}
.pjs-setting-label input:checked + .pjs-setting-checkbox::before { transform: translateX(22px);}
`)
            GM_addStyle(GM_getResourceText("swalStyle"))
        },

        registerMenuCommand() {
            GM_registerMenuCommand("⚙️ 设置", () => {
                let dom = `<div>
<label class="pjs-setting-label">隐藏下载付费弹窗提示<input type="checkbox" id="S-Payment" ${pjs.getValue("popup_payment_hidden") ? "checked" : ""}><span class="pjs-setting-checkbox"></span></label>
<label class="pjs-setting-label">视频倍速列表：<input type="text" id="S-Speed" value="${pjs.getValue("video_speed_diy")}"></label>
<div class="swal2-validation-message" id="swal2-validation-message" style="display: none;"></div>
</div>`

                Swal.fire({
                    title: "123pan Config",
                    html: dom,
                    showCloseButton: true,
                    confirmButtonText: "保存",
                    footer: `<div style="text-align: center;font-size: 1em;">✨ 助手免费开源　谨防上当受骗 ✨</div>`,
                    customClass: {
                        popup: "pjs-popup",
                    },
                }).then((res) => {
                    if (res.isConfirmed) {
                        pjs.option.forEach((v) => {
                            pjs.setValue(v.name, v.value)
                        })
                        history.go(0)
                    }
                })

                function isValidFormat(input) {
                    if (!input) return "视频倍速列表输入内容为空"
                    if (/(^,+|,+$|,,+)/.test(input)) return "视频倍速列表含有多余逗号"
                    const inputs = input.split(",")
                    const numbers = inputs.map(num => num.trim())
                    for (let num of numbers) {
                        if (isNaN(num)) return "视频倍速列表含有非法字符"
                        if (parseFloat(num) < 0.1 || parseFloat(num) > 32) return "视频倍速范围: 0.1 ≤ 倍速 ≤ 32"
                        if (!(/^(0|[1-9]\d*)(\.\d{1,2})?$/.test(num))) return "视频倍速列表内容格式错误"
                    }
                    if (new Set(inputs.map(Number)).size !== numbers.length) return "视频倍速列表含有重复内容"
                    return true
                }

                document.querySelector("#S-Speed").addEventListener("input", (e) => {
                    const isOKtext = isValidFormat(e.currentTarget.value)
                    const isOKobj = document.querySelector("#swal2-validation-message")
                    if (isOKtext == true) {
                        isOKobj.style.display = "none"
                    } else {
                        isOKobj.innerHTML = isOKtext
                        isOKobj.style.display = "flex"
                    }
                })
                document.querySelector("#S-Payment").addEventListener("change", (e) => {
                    const targetItem = pjs.option.find(item => item.name == "popup_payment_hidden")
                    targetItem.value = e.currentTarget.checked
                })
                document.querySelector("#S-Speed").addEventListener("change", (e) => {
                    const targetItem = pjs.option.find(item => item.name == "video_speed_diy")
                    const speedArr = e.currentTarget.value
                    if (isValidFormat(speedArr) == true) targetItem.value = speedArr.split(",").map(Number)
                })
            })
        },

        autoGoGoGo() {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|Opera Mini|Mobile/i.test(navigator.userAgent)
            const optionNames = pjs.option.map(item => item.name)
            optionNames.forEach(name => {
                const targetItem = pjs.option.find(item => item.name === name)
                if (targetItem) targetItem.value = pjs.getValue(name)
            })

            GM_addStyle(`
.advBanner,
[class*="banner_guide"],
[class*="adv-container"],
[class*="banner-container"],
[class*="header-waning-tips"],
.btn_reward,
.ant-carousel,
.activity-box,
#top_container,
.banner_all_wrap,
#banner_container,
.verifyBox img.default-img-title,
.uppy-Dashboard-slowSpeed-banner,
.video-new-user-tips:has(.open-vip),
.ant-modal-content .download-msgInfo-phone,
.bg_svip_block_ads
{ display: none !important; }
.contentBorder .conter { margin-bottom: 0 !important; }
.appBottomBtn.banner-bottom { bottom: 0 !important; }
.webbody.svip-body,.backgroundImage,.verifyBox { background-image: none !important; }
`)

            if (!isMobile) {
                GM_addStyle(`
.verifyBox .leftCard { width: 100% !important; }
.contentBorder { height: calc(-64px + 100vh) !important;width: 100% !important;max-width: 100% !important;margin: auto !important;}
.contentBorder > div:not(.cleanNet) { width: 75%; }
.web-body .content { width: 100% !important;margin: auto !important;flex-direction: unset !important;justify-content: center; }
.content-layout-page { width: 75%; }
.content-layout:has(.single-file-sharing-container) { margin: 64px auto 0; }
`)
            }

            const originalAtob = atob
            const originalFetch = fetch
            const originalOpen = XMLHttpRequest.prototype.open
            const originalSend = XMLHttpRequest.prototype.send
            const originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader
            const fuckRules = [
                {
                    runat: "header",
                    match: (url) => ["/file/download_info", "/file/batch_download_info", "/share/download/info", "/file/batch_download_share_info", "/play/info", "/download/traffic"].some(path => url.pathname.includes(path)),
                    action: (res, url) => {
                        res.platform = Math.random() < 0.5 ? "android" : "ios"
                        return res
                    }
                },
                {
                    runat: "end",
                    match: (url) => ["/file/download_info", "/file/batch_download_info", "/share/download/info", "/file/batch_download_share_info", "/play/info", "/download/traffic"].some(path => url.pathname.includes(path)),
                    action: (res, url) => {
                        if (pjs.getValue("popup_payment_hidden")) {
                            if (url.pathname.includes("/download/traffic")) {
                                res.data.clientFileSize = 1
                                res.data.originalFileSize = 1
                                res.data.isBlocked = false
                                res.data.isTrafficExceeded = false
                            }
                            if (res?.code === 5113 || res?.code === 5114 || res?.message?.includes("下载流量已超出") || res?.message?.includes("播放超限")) {
                                if (url.pathname.includes("batch_download")) {
                                    res = {
                                        code: 400,
                                        message: "请勿多选文件/文件夹下载！已为您拦截付费弹窗",
                                        data: null
                                    }
                                } else {
                                    res = {
                                        code: 400,
                                        message: "您本月下载流量已超出限制！已为您拦截付费弹窗",
                                        data: null
                                    }
                                }
                            }
                        }
                        if (res.data.DownloadUrl || res.data.DownloadURL) {
                            const origKey = res.data.DownloadUrl ? "DownloadUrl" : "DownloadURL"
                            const origURL = new URL(res.data[origKey])
                            let finalURL
                            if (origURL.origin.includes("web-pro")) {
                                const params = ((url) => { try { return decodeURIComponent(atob(url)) } catch { return atob(url) } })(origURL.searchParams.get("params"))
                                const directURL = new URL(params, origURL.origin)
                                directURL.searchParams.set("auto_redirect", 0)
                                origURL.searchParams.set("params", btoa(directURL.href))
                                finalURL = decodeURIComponent(origURL.href)
                            } else {
                                origURL.searchParams.set("auto_redirect", 0)
                                const newURL = new URL("https://web-pro2.123952.com/download-v2/", origURL.origin)
                                newURL.searchParams.set("params", btoa(encodeURI(origURL.href)))
                                newURL.searchParams.set("is_s3", 0)
                                finalURL = decodeURIComponent(newURL.href)
                            }
                            res.data[origKey] = finalURL
                        }
                        return res
                    }
                },
                {
                    runat: "end",
                    match: (url) => url.pathname.includes("/api/video/play/info"),
                    action: (res, url) => {
                        if (res.data?.video_play_info) res.data.video_play_info = res.data.video_play_info.filter(item => item.url !== "")
                        return res
                    }
                },
                {
                    runat: "end",
                    match: (url) => url.pathname.includes("/api/video/play/conf"),
                    action: (res, url) => {
                        res.data.speedList = pjs.getValue("video_speed_diy")
                        res.data.userVideoResolution = "1080p"
                        res.data.vipResolutionList = null
                        res.data.timeLimitSpeedList = null
                        res.data.vipSpeedList = null
                        return res
                    }
                },
                {
                    runat: "start",
                    match: (url) => ["/web_logs", "/metrics", "/advert", "/r.png"].some(path => url.pathname.includes(path)),
                    action: (res, url) => {
                        res = null
                        return res
                    }
                },
            ]

            unsafeWindow.fetch = async function (input, init = {}) {
                let url = typeof input === "string" ? input : input?.url || "";
                url = new URL(url, location.origin)
                if (fuckRules.some(rule => rule.match(url) && rule.runat === "header")) {
                    if (!init.headers) init.headers = {}
                    let tempHeaders = {}
                    if (init.headers instanceof Headers) {
                        for (let [key, value] of init.headers.entries()) {
                            tempHeaders[key] = value
                        }
                    } else {
                        tempHeaders = { ...init.headers }
                    }
                    init.headers = new Headers(fuckUniversal("fetch", url, tempHeaders, "header"))
                }
                if (fuckRules.some(rule => rule.match(url) && rule.runat === "end")) {
                    try {
                        const response = await originalFetch.apply(this, arguments)
                        const responseText = await response.text()
                        const res = fuckUniversal("fetch", url, responseText, "end")
                        return new Response(res, {
                            status: response.status,
                            statusText: response.statusText,
                            headers: response.headers
                        })
                    } catch (e) {
                        return originalFetch.apply(this, arguments)
                    }
                }
                if (fuckRules.some(rule => rule.match(url) && rule.runat === "start")) {
                    try {
                        const res = fuckUniversal("fetch", url, null, "start")
                        return new Response(res, {
                            status: 200,
                            statusText: "OK",
                            headers: { "Content-Type": "plain/text" }
                        })
                    } catch (e) {
                        return originalFetch.apply(this, arguments)
                    }
                }
                return originalFetch.apply(this, arguments)
            }

            unsafeWindow.XMLHttpRequest.prototype.open = function (method, input) {
                let url = new URL(input, location.origin)
                this._currentUrl = url
                this.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        if (fuckRules.some(rule => rule.match(url) && rule.runat === "end")) {
                            const res = fuckUniversal("XHR", url, this.responseText, "end")
                            Object.defineProperty(this, "responseText", {
                                writable: true,
                            })
                            Object.defineProperty(this, "response", {
                                writable: true,
                            })
                            this.response = res
                            this.responseText = res
                        }
                    }
                })
                return originalOpen.apply(this, arguments)
            }

            unsafeWindow.XMLHttpRequest.prototype.send = function (data) {
                const url = this._currentUrl
                if (this.headers) {
                    for (let [name, value] of Object.entries(this.headers)) {
                        originalSetRequestHeader.call(this, name, value)
                    }
                }
                if (fuckRules.find(rule => rule.match(url) && rule.runat === "start")) {
                    try {
                        const res = fuckUniversal("XHR", url, null, "start")
                        Object.defineProperty(this, "responseText", {
                            writable: true,
                        })
                        Object.defineProperty(this, "response", {
                            writable: true,
                        })
                        this.response = this.responseText = res;
                        ["readystatechange", "load", "loadend"].forEach(prop => {
                            this.dispatchEvent(new Event(prop))
                            if (typeof this[prop] === "function") this[prop]()
                            if (typeof this[`on${prop}`] === "function") this[`on${prop}`]()
                        })
                        return true
                    } catch (e) {
                        return originalSend.apply(this, arguments)
                    }
                }
                return originalSend.apply(this, arguments)
            }

            unsafeWindow.XMLHttpRequest.prototype.setRequestHeader = function (name, value) {
                const url = this._currentUrl
                if (fuckRules.some(rule => rule.match(url) && rule.runat === "header")) {
                    if (!this.headers) this.headers = {}
                    this.headers[name] = value
                    this.headers = fuckUniversal("XHR", url, { ...this.headers }, "header")
                    return
                }
                return originalSetRequestHeader.call(this, name, value)
            }

            unsafeWindow.atob = function (input) {
                try { return originalAtob(decodeURIComponent(input)) } catch (e) { return originalAtob(input) }
            }

            function fuckUniversal(from, url, data, type) {
                let res
                try {
                    res = typeof data === "string" ? JSON.parse(data) : data
                } catch (e) {
                    res = data
                }
                const rule = fuckRules.find(r => r.match(url) && r.runat === type)
                if (rule) {
                    res = rule.action(res, url)
                    try {
                        if (res !== null && typeof res === "object" && type === "header") {
                            let tempHeaders = {}
                            for (let key in res) {
                                tempHeaders[key.toLowerCase().split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("-")] = res[key]
                            }
                            res = tempHeaders
                        }
                    } catch (e) { return }
                    try {
                        if (res !== null && typeof res === "object" && type !== "header") res = JSON.stringify(res)
                    } catch (e) { return }
                }
                return res
            }

            if (pjs.getValue("popup_payment_hidden")) {
                GM_addStyle(`.loginModal-footer.payment-footer,.download-pay-footer { display: none !important; }`)
            }
        },

        init() {
            this.initValue()
            this.addPluginStyle()
            this.registerMenuCommand()
            this.autoGoGoGo()
        }
    }

    main.init()
})()
