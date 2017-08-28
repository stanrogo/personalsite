<?php $__env->startSection('head'); ?>
    <link async rel="stylesheet" type="text/css" href="<?php echo e(asset('css/home.css')); ?>">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('page-template'); ?>

    <div class="background background--image"></div>
    <div class="background background--overlay"></div>

    <?php echo $__env->make('includes.hero', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>