/**
 * 顶部标题栏组件
 */
import { Maximize2, X } from 'lucide-react';
import { Button } from '@main/components/ui';

export default function TopBar() {
  const handleMaximize = () => {
    // TODO: 调用 WPF 最大化窗口
    console.log('Maximize window');
  };

  const handleClose = () => {
    // TODO: 调用 WPF 关闭窗口
    console.log('Close window');
  };

  return (
    <header className="bg-card drag flex h-12 items-center justify-between border-b px-4">
      {/* 标题区域 */}
      <div className="flex items-center gap-2">
        <h2 className="text-foreground text-sm font-medium">AI 空间</h2>
      </div>

      {/* 窗口控制按钮 */}
      <div className="no-drag flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={handleMaximize}
          title="最大化"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-destructive hover:text-destructive-foreground h-8 w-8"
          onClick={handleClose}
          title="关闭"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
