<!DOCTYPE html>
<html lang="en">
<head>
   <?php echo $__env->make('includes.head', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
</head>
<body>
<div id="app">

    <?php echo $__env->make('includes.navbar', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

    <?php echo $__env->yieldContent('page-template'); ?>

    <?php echo $__env->make('includes.footer', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

</div>

<script src="<?php echo e(asset('js/app.js')); ?>" type="application/javascript"></script>

<?php echo $__env->make('includes.sw', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

<?php echo $__env->make('includes.fonts', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

</body>
</html>
